export interface AppItemType {
  /** 名称 */
  name: string;
  /** 简介 */
  intro: string;
  /** 图标 */
  icon: string;
  /** 官网链接 */
  link: string;
  /** 标题 */
  category: string;
  /** 更新时间 */
  updated: string;
  /** 收费模式 */
  charge: string;
  /** 支持的平台 */
  chip: string[];
  /** 安装包大小 */
  size: string;
  /** 标签 */
  tags?: string[];
}

/** 书籍条目 */
export interface BookItemType {
  /** 标题 */
  title: string;
  /** 副标题 */
  subtitle?: string;
  /** 作者 */
  author?: string[];
  /** 译者 */
  translator?: string[];
  /** 封面 */
  cover: string;
  /** 出版社 */
  press?: string;
  /** 出版时间 */
  published?: string;
  /** 国际标准图书编号 */
  ISBN?: string;
  /** 豆瓣链接 */
  downloadLink?: string;
  /** 文件格式 */
  format?: string;
  /** 文件大小 */
  size?: string;
  /** 更新时间 */
  updated: string;
  /** 下载链接 */
  doubanLink?: string;
}
