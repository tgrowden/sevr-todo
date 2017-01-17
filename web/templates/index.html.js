module.exports = ({ site }) => `
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>${site.title}</title>
        <link rel="stylesheet" href="http://yui.yahooapis.com/pure/0.6.0/pure-min.css">
        <link rel="stylesheet" href="http://yui.yahooapis.com/pure/0.6.0/grids-responsive-min.css">
        <link rel="stylesheet" href="/css/layouts/blog.css">
    </head>
    <body>
        <div id="layout" class="pure-g">
            <div class="sidebar pure-u-1 pure-u-md-1-4">
                <div class="header">
                    <h1 class="brand-title">${site.title}</h1>
                    <h2 class="brand-tagline">A Tutorial</h2>
                </div>
            </div>

            <div class="content pure-u-1 pure-u-md-3-4">
                <div>
					<form method="post" accept-charset="utf-8" role="form" action="/login">
						<input type="text" name="username" placeholder="Username" required>
						<input type="password" name="password" placeholder="Password" required>
						<button>Submit</button>
					</form>
				</div>
            </div>
        </div>
    </body>
</html>
`
