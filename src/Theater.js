import React, { Component } from 'react';
import './App.css';
import './Theater.css';

class Theater extends Component {
	render(){
		return(
			<div id="theater-info">
				<p>I'm a company member with <a href="http://www.prometheantheatre.org">Promethean Theatre Ensemble</a>, for whom I've acted in <a href="http://www.prometheantheatre.org/stage/the-lion-in-winter/">The Lion in Winter</a> and the forthcoming <a href="http://www.prometheantheatre.org/stage/the-madwoman-of-chaillot/">The Madwoman of Chaillot</a>, written the short play Asgard and Utgard for the Chicago Fringe Festival, and assistant directed productions of <a href="http://www.prometheantheatre.org/portfolio/winters-tale/">The Winter's Tale</a> and <a href="http://www.chicagotribune.com/entertainment/theater/reviews/ct-gross-indecency-oscar-wilde-review-column.html">Gross Indecency</a>. Some of my other favorite experiences include acting in Strawdog Theater Company's <a href="http://www.strawdog.org/index.php?section=history&production=majororgan">With Love and a Major Organ</a>, teaching drama at <a href="http://edgeofthewood.com">Edge of the Wood Theatre</a> and <a href="http://www.emeraldcitytheatre.com">Emerald City Theatre</a>, and writing two scripts for City Lit Theater's annual <a href="http://www.citylit.org/art-of-adaptation-festival">Art of Adaptation Festival</a>.</p>
			</div>
		)
	}
}

export default Theater;