import React from 'react'
import ReactDOM from 'react-dom'
import Backbone from 'backbone'
import init from './init'


var BlogPage = React.createClass({
	// every react component has a method called `.render()` that describes (via its return value) 
	// what elements that component will contain. in other words, it returns the tree structure, 
	// written in jsx, that the element will contain.
	render: function() {
		return ( // important! you can only return *one element* here. that element can have children,
			// but it can't have siblings.
			<div className="blog-page"> {/*if i write a lowercase jsx element, React
			will treat it as an html tag. */}
				<Header /> {/*if i write an uppercase jsx element, React
			will assume that it is a custom component and look for its definition
		(Banner is defined below). */}
				<PageBody />
			</div>
			)
	}
})

var Header = React.createClass({
	render: function() {
		return (
			<div className="header">
				<img src="http://magentanova.github.io/html-intro-1/images/houston.jpg"/>
				<img className="logoImage" src="http://magentanova.github.io/html-intro-1/images/ironyardlogo.png"/>
			</div>
			)
	}
})

var PageBody = React.createClass({
	render: function() {
		return (
			<div className="content">
				<Column1 />
				<Column2 />
			</div>
			)
	}
})

var Column1 = React.createClass({
	render: function() {
		return (
			<div className="column1">
				<TitleSection />
				<h2 className="searchLabel">SEARCH</h2>
				<input type="text" name="search" placeholder="Search.."/>
			</div>
			)
	}
})

var TitleSection = React.createClass({
	render: function() {
		return (
			<div className="titleSection">
				<h2 className="ironyardTitle">THE IRONYARD | HOUSTON</h2>
				<h3 className="ironyardSubtitle">Happenings and updates from the Iron yard in Houston, TX</h3>
			</div>
			)
	}
})

var Column2 = React.createClass({
	render: function() {
		return (
			<div className="column2">
				<h1 className="title">September 22 Starts a New Class of the Iron Yard Houston Students</h1>
			<h4 className="subTitle">by Brian Dorton, Campus Director at the Iron Yard Houston</h4>

			<img className="classroomPhoto" src="http://magentanova.github.io/html-intro-1/images/classroom.jpg"/>

			<p className="paragraph">    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
			tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
			quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
			consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
			cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
			proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
			</div>
			)
	}
})

const app = function() {

	var libraryName = 'react'                
  	ReactDOM.render(<BlogPage />, document.querySelector('.container'))
}

// x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..
// NECESSARY FOR USER FUNCTIONALITY. DO NOT CHANGE. 
export const app_name = init()
app()
// x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..