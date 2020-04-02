import C from './constants.js'
import { errors } from './store/reducers'

const state = [
	"user not authorized",
	"server feed not found"
]

const action = {
	type: C.CLEAR_ERROR,
	payload: 0
}

const nextState = errors(state, action)

console.log(`

    initial state: ${state}
    action: ${JSON.stringify(action)}
    new state: ${JSON.stringify(nextState)}

`)









// import { errors } from './store/reducers'

// const state = [
// 	"user not authorized",
// 	"server feed not found"
// ]

// const action = {
// 	type: C.CLEAR_ERROR,
// 	payload: 0
// }

// const nextState = errors(state, action)

// console.log(`

//     initial state: ${state}
//     action: ${JSON.stringify(action)}
//     new state: ${JSON.stringify(nextState)}

// `)









// import { skiDay } from './store/reducers'

// const state = null

// const action = {
// 	type: C.ADD_DAY,
// 	payload: {
// 		"resort": "Heavenly",
// 		"date": "2016-12-16",
// 		"powder": true,
// 		"backcountry": false
// 	}
// }

// const nextState = skiDay(state, action)

// console.log(`

//     initial state: ${state}
//     action: ${JSON.stringify(action)}
//     new state: ${JSON.stringify(nextState)}

// `)








// import { goal } from './store/reducers'

// const state = 10

// const action = {
// 	type: C.SET_GOAL,
// 	payload: 15
// }

// const nextState = goal(state, action)

// console.log(`

//     initial goal: ${state}
//     action: ${JSON.stringify(action)}
//     new goal: ${nextState}

// `)










// import { allSkiDays, goal } from './initialState.json'


// console.log(`
//     Ski Day Counter
//     ===============
//     The goal is ${goal} days
//     Initially there are ${allSkiDays.length} ski days in state

//     Constants (actions)
//     -------------------
//     ${Object.keys(C).join('\n      ')}
// `)