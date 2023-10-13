import type {
	GitHubBannedList,
	GitHubURLResolver,
	NPMBannedList,
	NPMURLResolver,
} from "./types";

const GITHUBRAW = "https://raw.githubusercontent.com";
const UNPKG = "https://unpkg.com";

export const resolveGitHubURL: GitHubURLResolver = ({
	owner,
	repo,
	branch,
	path,
}) => `${GITHUBRAW}/${owner}/${repo}/${branch}/${path}`;
export const resolveNPMURL: NPMURLResolver = ({ pkg, version, path }) =>
	`${UNPKG}/${pkg}@${version}${path ? `/${removeTrailingSlash(path)}` : ""}`;
export const MAX_CACHE = "public, max-age=31536000, immutable";

// https://github.com/so1ve/dlvr/blob/main/docs/config.md
export const BANNED_NPM: NPMBannedList = [
	"*/**",
];
export const BANNED_GITHUB: GitHubBannedList = [
	"!mycpen/**",
];
