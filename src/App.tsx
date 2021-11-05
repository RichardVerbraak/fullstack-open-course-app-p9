import React from 'react'
import Header from './components/Header'
import Content from './components/Content'
import Total from './components/Total'

// Base type
interface CoursePartBase {
	name: string
	exerciseCount: number
	type: string
}

// Base type for those with a description prop
interface CourseWithDescription extends CoursePartBase {
	description: string
}

// Narrowed down Interfaces in order to use exhaustive checking later (making sure the values are right)
interface CourseNormalPart extends CourseWithDescription {
	name: 'Fundamentals' | 'Advanced'
	type: 'normal'
}

interface CourseProjectPart extends CoursePartBase {
	name: 'Using props to pass data'
	type: 'groupProject'
	groupProjectCount: number
}

interface CourseSubmissionPart extends CourseWithDescription {
	name: 'Deeper type usage'
	type: 'submission'
	exerciseSubmissionLink: string
}

// The 3 different type of Courses composed of the above interfaces
// Basically, the 3 models for the type of data in the courseParts array
export type CoursePart =
	| CourseNormalPart
	| CourseProjectPart
	| CourseSubmissionPart

const App = () => {
	const courseName = 'Half Stack application development'

	// Returns an array that conform to the CoursePart types
	const courseParts: CoursePart[] = [
		{
			name: 'Fundamentals',
			exerciseCount: 10,
			description: 'This is the leisured course part',
			type: 'normal',
		},
		{
			name: 'Advanced',
			exerciseCount: 7,
			description: 'This is the harded course part',
			type: 'normal',
		},
		{
			name: 'Using props to pass data',
			exerciseCount: 7,
			groupProjectCount: 3,
			type: 'groupProject',
		},
		{
			name: 'Deeper type usage',
			exerciseCount: 14,
			description: 'Confusing description',
			exerciseSubmissionLink: 'https://fake-exercise-submit.made-up-url.dev',
			type: 'submission',
		},
	]

	return (
		<div>
			<Header courseName={courseName} />
			<Content courseParts={courseParts} />
			<Total courseParts={courseParts} />
		</div>
	)
}

export default App
