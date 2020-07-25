browser.webRequest.onBeforeRequest.addListener(
	({ url }) => {
		return {
			redirectUrl: url.replace(
				/^http(s)?:\/\/(www.)?reddit.com/,
				"https://old.reddit.com"
			),
		}
	},
	{ urls: [
		"*://reddit.com/*",
		"*://www.reddit.com/*",
	] },
	["blocking"],
)
