// The function will return block inline styles using block level meta-data
export default function blockStyle(block) {
  const blockAlignment = block.getData() && block.getData().get('text-align');
  if (blockAlignment) {
    return `rdw-${blockAlignment}-aligned-block`;
  }
  return '';
}
