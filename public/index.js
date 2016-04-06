var React = require('react');
var connect = require('react-redux').connect;
var Link = require('react-router').Link;

var Index = React.createClass({

	render: function() {
		return (
		<html>
			<head>
				<meta charSet="utf-8" />
				<title>React Server Tutorial</title>
				<link rel="stylesheet" href="css/base.css" />
				<script dangerouslySetInnerHTML={{__html: this.props.initialState}} />
			</head>
			<body>
				<div id="content">
					<em>React Server Tutorial: <a href="https://github.com/firasd/react-server-tutorial/" target="_blank">Github</a></em>
					<ul>
						<li><Link to="/" activeStyle={{fontWeight: 'bold'}} onlyActiveOnIndex>Comments</Link></li>
						<li><Link to="/another-page" activeStyle={{fontWeight: 'bold'}}>Another Page</Link></li>
					</ul>
					{this.props.children}
					<p><em>Made with &hearts; in 2016</em></p>
				</div>

				{/* Delete or comment out script tags in this block when using webpack */}
				{/**/}
				<script src="https://cdnjs.cloudflare.com/ajax/libs/react/0.14.7/react.js"></script>
				<script src="https://cdnjs.cloudflare.com/ajax/libs/react/0.14.7/react-dom.js"></script>
				<script src="https://cdnjs.cloudflare.com/ajax/libs/redux/3.3.1/redux.min.js"></script>
				<script src="https://cdnjs.cloudflare.com/ajax/libs/react-redux/4.4.0/react-redux.min.js"></script>
				<script src="https://npmcdn.com/react-router/umd/ReactRouter.min.js"></script>
				<script src="https://cdnjs.cloudflare.com/ajax/libs/marked/0.3.5/marked.min.js"></script>
				<script src="https://cdnjs.cloudflare.com/ajax/libs/babel-core/5.6.15/browser.js"></script>
				<script src="scripts/require-shims.js"></script>
				<script type="text/babel" src="redux-store.js"></script>
				<script type="text/babel" src="index.js"></script>
				<script type="text/babel" src="commentbox.js"></script>
				<script type="text/babel" src="routes.js"></script>
				<script type="text/babel" src="client.js"></script>
				{/**/}
				{/* End of scripts to remove when using webpack */}

				<script src="scripts/polyfill.js"></script>
				<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.2.0/jquery.min.js"></script>

				{/* Un-comment script tag below to include bundle.js when using webpack */}
				{/*<script src="scripts/bundle.js"></script>*/}

			</body>
		</html>
		)
	}
});

var IndexState = function(state) {
	return {
	}
}

Index = connect(
	IndexState
)(Index)

module.exports = Index
