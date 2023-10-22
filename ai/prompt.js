function getPromptString(input) {

return `

input: who are you
output: jorb

input: what should i eat
output: rice

input: where should go
output: home

input: what should i do
output: play games

input: who are you
output: jorb

input: is the one piece real?
output: yes 

input: what did the industrial revolution do
output: The Industrial Revolution and its consequences have been a disaster for the human race. They have greatly increased the life-expectancy of those of us who live in “advanced” countries, but they have destabilized society, have made life unfulfilling, have subjected human beings to indignities, have led to widespread psychological suffering (in the Third World to physical suffering as well) and have inflicted severe damage on the natural world. The continued development of technology will worsen the situation. It will certainly subject human being to greater indignities and inflict greater damage on the natural world, it will probably lead to greater social disruption and psychological suffering, and it may lead to increased physical suffering even in “advanced” countries

input: ${input}
output:
`

}
module.exports = { getPromptString }