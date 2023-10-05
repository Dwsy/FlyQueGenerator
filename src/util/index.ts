import { useFlyStore } from "../store/flyStore";

export function getTableShortName(tableName: string, relationTableColumnName?: string, seq?) {
  const words = tableName.split("_");
  const firstLetters = words.map((word) => word.charAt(0));
  let name = firstLetters.join("");
  if (seq != undefined) {
    name += seq
  } else {
    if (relationTableColumnName != undefined) {
      name += "_" + relationTableColumnName.slice(0, 3)
    }
  }
  return name;
}

export const copyToClipboard = (text: string) => {
  // 创建一个临时textarea元素以便执行复制操作
  const textarea = document.createElement("textarea");
  textarea.value = text;
  document.body.appendChild(textarea);

  // 选择并执行复制操作
  textarea.select();
  document.execCommand('copy');

  // 移除临时textarea元素
  document.body.removeChild(textarea);

}

/**
 * 添加一个按钮到指定的选择器中
 * @param {string} selector - 指定的选择器
 * @param {string} text - 按钮的文本
 * @param {string} iconClass - 按钮的图标 CSS 类名
 * @param {Function} clickHandler - 按钮的点击事件处理函数
 * @param {number} seq - 按钮的序号
 * @param {string} [hoverText] - 按钮的悬停文本
 */
export const addButton = (selector: string, text: string, iconClass: string, clickHandler: () => void, seq, hoverText?: string) => {
  if (selector == undefined) {
    selector = "#beSetting > div.main-content > div.tab-operation > button:nth-child(2)"
  }
  if (document.querySelector(`#beSetting > div.main-content > div.tab-operation > button:nth-child(${2 + seq})`) != null) {
    return
  }
  if (!document.querySelector(selector)) {
    console.error(`Button not found: ${selector}`);
    return;
  }
  const originalButton = document.querySelector(selector) as HTMLButtonElement;
  const originalButtonIcon = originalButton.querySelector("i") as HTMLElement;
  const newButton = originalButton.cloneNode(false) as HTMLButtonElement;
  const newButtonIcon = originalButtonIcon.cloneNode(true) as HTMLElement;
  newButtonIcon.classList.replace('ideicon-protocol', iconClass);
  const newButtonSpan = document.createElement('span');
  newButtonSpan.textContent = text;
  newButton.appendChild(newButtonIcon);
  newButton.appendChild(newButtonSpan);
  newButton.addEventListener("click", clickHandler);
  hoverText ? newButton.title = hoverText : newButton.title = 'dwsy'
  originalButton.parentNode!.appendChild(newButton);
}



/**
 * 将字符串转换为驼峰命名
 * @param {string} str - 要转换的字符串。
 * @returns {string} 转换后的字符串。
 */
export function toCamelCase(str: string): string {
  if (!str) {
    return str;
  }
  return str.replace(/_([a-z])/g, (match, p1) => p1.toUpperCase())
    .replace(/^([a-z])/g, (match, p1) => p1.toUpperCase());
}

export function getPrimaryKey(propertyCode: string) {
  const flyStore = useFlyStore()

  const tableData = flyStore.tableDataMap.get(propertyCode)
  let primaryKey = {
    pl_dictionary: "dictionaryid",
    pl_orgstruct: "orgstructid",
    pl_region: "regionid",
  }[tableData.tablename]
  if (!primaryKey) {
    for (const columnData of tableData.properties) {
      if (columnData.propertytypecode == "1") {
        primaryKey = columnData.columnname;
        break;
      }
    }
  }
  return primaryKey
}