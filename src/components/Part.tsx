import React from 'react'
import { CoursePart } from '../App'

const assertNever = (value: never): never => {
	throw new Error(`Unhandled value: ${JSON.stringify(value)}`)
}

const Part = ({ part }: { part: CoursePart }) => {
	switch (part.name) {
		case 'Fundamentals':
			return (
				<div>
					<h4>{part.name}</h4>
					<p>{part.exerciseCount}</p>
					<p>{part.type}</p>
					<p>{part.description}</p>
				</div>
			)

		case 'Advanced':
			return (
				<div>
					<h4>{part.name}</h4>
					<p>{part.exerciseCount}</p>
					<p>{part.type}</p>
					<p>{part.description}</p>
				</div>
			)

		case 'Using props to pass data':
			return (
				<div>
					<h4>{part.name}</h4>
					<p>{part.exerciseCount}</p>
					<p>{part.type}</p>
				</div>
			)

		case 'Deeper type usage': {
			return (
				<div>
					<h4>{part.name}</h4>
					<p>{part.exerciseCount}</p>
					<p>{part.type}</p>
					<p>{part.description}</p>
				</div>
			)
		}

		case 'Backend development': {
			return (
				<div>
					<h4>{part.name}</h4>
					<p>{part.exerciseCount}</p>
					<p>{part.type}</p>
					<p>{part.description}</p>
					<p>
						Required skills: {part.requirements[0]}, {part.requirements[1]}
					</p>
				</div>
			)
		}

		default:
			return assertNever(part)
	}
}

export default Part
