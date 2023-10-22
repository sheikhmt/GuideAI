function getPromptString(input) {

return `
input: what should i eat
output: rice

input: where should go
output: home

input: what should i do
output: play games

input: who are you
output: jorb

input: ${input}
output:
`

}
module.exports = { getPromptString }