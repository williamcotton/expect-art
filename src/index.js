const asciiArt = `
███████╗██╗  ██╗██████╗ ███████╗ ██████╗████████╗
██╔════╝╚██╗██╔╝██╔══██╗██╔════╝██╔════╝╚══██╔══╝
█████╗   ╚███╔╝ ██████╔╝█████╗  ██║        ██║   
██╔══╝   ██╔██╗ ██╔═══╝ ██╔══╝  ██║        ██║   
███████╗██╔╝ ██╗██║     ███████╗╚██████╗   ██║   
╚══════╝╚═╝  ╚═╝╚═╝     ╚══════╝ ╚═════╝   ╚═╝   
`

const boxPrint = (text, { style }) => {
  let output = style === 'thin' || style === 'bottom-thick'
    ? '╔═' + '═'.repeat(text.length) + '═╗\n'
    : '╔█' + '█'.repeat(text.length) + '█╗\n'
  output += '║ ' + text + ' ║\n'
  output += style === 'bottom-thick' || style === 'both-thick'
    ? '╚█' + '█'.repeat(text.length) + '█╝\n'
    : '╚═' + '═'.repeat(text.length) + '═╝\n'
  return output
}

module.exports = { asciiArt, boxPrint }
