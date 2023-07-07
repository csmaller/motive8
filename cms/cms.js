import CMS from 'netlify-cms-app';

CMS.registerEditorComponent({
  id: 'ImageResponsive',
  label: 'Image-Responsive',
  fields: [
    {
      name: 'title',
      label: 'Title',
      widget: 'string',
    },
    {
      name: 'src',
      label: 'Image Src',
      widget: 'image',
    },
    {
      name: 'class',
      label: 'CSS Class',
      widget: 'string',
    },
  ],
  pattern: /{{< img src="([a-zA-Z0-9-_ ]+)" title="([a-zA-Z0-9-_ ]+)" >}}/,
  fromBlock: function (match) {
    return {
      title: match[1],
      src: match[2],
    };
  },
  toBlock: function (obj) {
    return `<img src="${obj.src}" title="${obj.title}" class="${obj.class}" />`;
  },
  toPreview: function (obj) {
    return `<img><img src=${obj.src} alt=${obj.title}><figcaption>${obj.title}</figcaption></img>`;
  },
});
