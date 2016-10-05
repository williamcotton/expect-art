const test = require('tape')

const { asciiArt, boxPrint } = require('../src')

test('expect art', t => {
  t.test('should asciiArt', t => {
    console.log(asciiArt)
    t.ok(asciiArt)
    t.end()
  })
  t.test('should boxPrint thin', t => {
    const box = boxPrint('cow', { style: 'thin' })
    console.log(box)
    t.equal(box, '╔═════╗\n║ cow ║\n╚═════╝\n')
    t.end()
  })
  t.test('should boxPrint top-thick', t => {
    const box = boxPrint('pig', { style: 'top-thick' })
    console.log(box)
    t.equal(box, '╔█████╗\n║ pig ║\n╚═════╝\n')
    t.end()
  })
  t.test('should boxPrint bottom-thick', t => {
    const box = boxPrint('bird', { style: 'bottom-thick' })
    console.log(box)
    t.equal(box, '╔══════╗\n║ bird ║\n╚██████╝\n')
    t.end()
  })
  t.test('should boxPrint top-thick', t => {
    const box = boxPrint('chicken', { style: 'top-thick' })
    console.log(box)
    t.equal(box, '╔█████████╗\n║ chicken ║\n╚═════════╝\n')
    t.end()
  })
  t.test('should boxPrint both-thick', t => {
    const box = boxPrint('kangaroo', { style: 'both-thick' })
    console.log(box)
    t.equal(box, '╔██████████╗\n║ kangaroo ║\n╚██████████╝\n')
    t.end()
  })
})
