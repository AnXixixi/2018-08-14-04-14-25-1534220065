module.exports = function main(str) {
  const mapTop = [`._.`, `...`, `._.`, `._.`, `...`, `._.`, `._.`, `._.`, `._.`, `._.`]
  const mapCenter = [`|.|`, `..|`, `._|`, `._|`, `|_|`, `|_.`, `|_.`, `..|`, `|_|`, `|_|`]
  const mapBottom = [`|_|`, `..|`, `|_.`, `._|`, `..|`, `._|`, `|_|`, `..|`, `|_|`, `..|`]
  const arr = [...str]

  let resTop = ``
  let resCenter = ``
  let resBottom = ``
  arr.forEach((cur, index) => {
    if (index === arr.length - 1) {
      resTop += mapTop[cur]
      resCenter += mapCenter[cur]
      resBottom += mapBottom[cur]
    } else {
      resTop += mapTop[cur] + ` `
      resCenter += mapCenter[cur] + ` `
      resBottom += mapBottom[cur] + ` `
    }
  })
  let res = resTop + `\n` + resCenter + `\n` + resBottom + `\n`
  return res
};

