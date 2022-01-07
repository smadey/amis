amis.define('docs/zh-CN/components/form/input-formula.md', function(require, exports, module, define) {

  module.exports = {
    "title": "InputFormula 公式编辑器",
    "description": null,
    "type": 0,
    "group": null,
    "menuName": "InputFormula",
    "icon": null,
    "order": 21,
    "html": "<div class=\"markdown-body\"><h2><a class=\"anchor\" name=\"%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95\" href=\"#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>基本用法</h2><p>用来输入公式。还是 beta 版本，整体待优化。</p>\n</div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\"  scope=\"body\">{\n  \"type\": \"form\",\n  \"debug\": true,\n  \"body\": [\n    {\n      \"type\": \"input-formula\",\n      \"name\": \"formula\",\n      \"label\": \"公式\",\n      \"variableMode\": \"tabs\",\n      \"evalMode\": false,\n      \"value\": \"SUM(1 + 2)\",\n      \"variables\": [\n        {\n          \"label\": \"表单字段\",\n          \"children\": [\n            {\n              \"label\": \"ID\",\n              \"value\": \"id\"\n            },\n            {\n              \"label\": \"ID2\",\n              \"value\": \"id2\"\n            }\n          ]\n        },\n        {\n          \"label\": \"流程字段\",\n          \"children\": [\n            {\n              \"label\": \"ID\",\n              \"value\": \"id\"\n            },\n            {\n              \"label\": \"ID2\",\n              \"value\": \"id2\"\n            }\n          ]\n        }\n      ],\n    }\n  ]\n}\n</script></div><div class=\"markdown-body\">\n<h2><a class=\"anchor\" name=\"%E5%B1%9E%E6%80%A7%E8%A1%A8\" href=\"#%E5%B1%9E%E6%80%A7%E8%A1%A8\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>属性表</h2><table>\n<thead>\n<tr>\n<th>属性名</th>\n<th>类型</th>\n<th>默认值</th>\n<th>说明</th>\n</tr>\n</thead>\n<tbody><tr>\n<td>header</td>\n<td>string</td>\n<td></td>\n<td>弹出来的弹框标题</td>\n</tr>\n<tr>\n<td>evalMode</td>\n<td>Boolean</td>\n<td>true</td>\n<td>表达式模式 或者 模板模式，模板模式则需要将表达式写在 <code>${</code> 和 <code>}</code> 中间。</td>\n</tr>\n<tr>\n<td>variables</td>\n<td>{label: string; value: string; children?: any[];}[]</td>\n<td>[]</td>\n<td>可用变量</td>\n</tr>\n<tr>\n<td>variableMode</td>\n<td>string</td>\n<td><code>list</code></td>\n<td>可配置成 <code>tabs</code> 或者 <code>tree</code> 默认为列表，支持分组。</td>\n</tr>\n<tr>\n<td>functions</td>\n<td>Object[]</td>\n<td></td>\n<td>可以不设置，默认就是 amis-formula 里面定义的函数，如果扩充了新的函数则需要指定</td>\n</tr>\n</tbody></table>\n</div>",
    "toc": {
      "label": "目录",
      "type": "toc",
      "children": [
        {
          "label": "基本用法",
          "fragment": "%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95",
          "fullPath": "#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95",
          "level": 2
        },
        {
          "label": "属性表",
          "fragment": "%E5%B1%9E%E6%80%A7%E8%A1%A8",
          "fullPath": "#%E5%B1%9E%E6%80%A7%E8%A1%A8",
          "level": 2
        }
      ],
      "level": 0
    }
  };

});
