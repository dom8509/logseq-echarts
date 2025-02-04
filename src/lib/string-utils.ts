export function dedent(str: string) {
    // thanks https://codepen.io/gskinner/pen/BVEzox
    str = str.replace(/^\n/, '')
    const match = str.match(/^\s+/)
    return match ? str.replace(new RegExp('^' + match[0], 'gm'), '') : str
}

export function parseStringToJson(str: string) {
  const formatted = str.replaceAll('\n', '').replaceAll(' ', '')
  return eval('(' + formatted + ')')
}
