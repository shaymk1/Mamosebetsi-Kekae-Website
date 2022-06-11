import { ClipboardListIcon } from '@heroicons/react/solid';
import { IdentificationIcon } from '@heroicons/react/solid';

const PythonLogo = require('../assets/logos/PythonLogo.png');
const ReactLogo = require('../assets/logos/ReactLogo.png');
const TypescriptLogo = require('../assets/logos/TypescriptLogo.png');
const JsLogo = require('../assets/logos/JsLogo.png');
const NextLogo = require('../assets/logos/NextLogo.png');
const TailwindLogo = require('../assets/logos/TailwindLogo.png');
const SqlLogo = require('../assets/logos/SqlLogo.png');
const ReduxLogo = require('../assets/logos/ReduxLogo.png');
const FirebaseLogo = require('../assets/logos/FirebaseLogo.png');
const MongoDBLogo = require('../assets/logos/MongoDBLogo.png');
const NodeJSLogo = require('../assets/logos/NodeJSLogo.png');
const DockerLogo = require('../assets/logos/DockerLogo.png');

const Skills = () => {
	return (
		<div
			id="Resume"
			className="mx-12 mt-64 mb-4 text-justify lg:w-1/2 lg:mr-60 lg:ml-auto"
		>
			<div>
				<div className="table">
					<ClipboardListIcon className="w-5 h-5 mr-4 text-yellow_vs" />{' '}
					<code className="table-cell text-[#e6f1ff] text-3xl mt-5 whitespace-nowrap">
						Skills
					</code>
				</div>
			</div>
			<div className="grid grid-cols-3 gap-2 mt-5 text-sm text-brown_vs">
				<div className="flex flex-row mb-3">
					<img
						src={JsLogo}
						alt="Js Logo"
						className="w-5 h-5 ml-3 mr-4 text-yellow_vs"
					/>
					<code>JavaScript (ES6+)</code>
				</div>
				<div className="flex flex-row mb-3">
					<img
						src={NextLogo}
						alt="Next Logo"
						className="w-5 h-5 ml-3 mr-4 text-yellow_vs"
					/>
					<code>Next.js</code>
				</div>
				<div className="flex flex-row mb-3">
					<img
						src={ReactLogo}
						alt="React Logo"
						className="w-5 h-5 ml-3 mr-4 text-yellow_vs"
					/>
					<code>React</code>
				</div>
				<div className="flex flex-row mb-3">
					<img
						src={TypescriptLogo}
						alt="Typescript Logo"
						className="w-5 h-5 ml-3 mr-4 text-yellow_vs"
					/>
					<code>TypeScript</code>
				</div>
				<div className="flex flex-row mb-3">
					<img
						src={TailwindLogo}
						alt="Tailwind Logo"
						className="w-5 h-5 ml-3 mr-4 text-yellow_vs"
					/>
					<code>Tailwind CSS</code>
				</div>
				<div className="flex flex-row mb-3">
					<img
						src={ReduxLogo}
						alt="Redux Logo"
						className="w-5 h-5 ml-3 mr-4 text-yellow_vs"
					/>
					<code>Redux</code>
				</div>
				<div className="flex flex-row mb-3">
					<img
						src={PythonLogo}
						alt="Python Logo"
						className="w-5 h-5 ml-3 mr-4 text-yellow_vs"
					/>
					<code>Python</code>
				</div>
				<div className="flex flex-row mb-3">
					<img
						src={FirebaseLogo}
						alt="Firebase Logo"
						className="w-5 h-5 ml-3 mr-4 text-yellow_vs"
					/>
					<code>Firebase</code>
				</div>
				<div className="flex flex-row mb-3">
					<img
						src={NodeJSLogo}
						alt="NodeJS Logo"
						className="w-5 h-5 ml-3 mr-4 text-yellow_vs"
					/>
					<code>Nodejs</code>
				</div>
				<div className="flex flex-row mb-3">
					<img
						src={SqlLogo}
						alt="SQL Logo"
						className="w-5 h-5 ml-3 mr-4 text-yellow_vs"
					/>
					<code>SQL</code>
				</div>
				<div className="flex flex-row mb-3">
					<img
						src={MongoDBLogo}
						alt="MongoDB Logo"
						className="w-5 h-5 ml-3 mr-4 text-yellow_vs"
					/>
					<code>MongoDB</code>
				</div>
				<div className="flex flex-row mb-3">
					<img
						src={DockerLogo}
						alt="MongoDB Logo"
						className="w-5 h-5 ml-3 mr-4 text-yellow_vs"
					/>
					<code>Docker</code>
				</div>
			</div>
		</div>
	);
};

export default Skills;
