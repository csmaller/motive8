export default function ({ query, enablePreview }) {
  if (query && query.preview) {
    enablePreview();
  }
}
