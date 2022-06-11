import { MailIcon } from '@heroicons/react/solid';

const GitLogo = require('../assets/logos/GitLogo.png');
const LinkedinLogo = require('../assets/logos/LinkedinLogo.png');
// const KaggleLogo = require("../assets/logos/KaggleLogo.png");
const MailLogo = require('../assets/logos/MailLogo.png');

const Contact = () => {
	return (
		<div id="Contact" className="pb-72 mt-36">
			<div className="table mx-12 lg:mx-60">
				<MailIcon className="w-5 h-5 mr-4 text-yellow_vs" />
				<code className="table-cell text-[#e6f1ff] text-3xl mt-5 whitespace-nowrap">
					Get In Touch
				</code>
				<div className="table-cell border-b border-b-[#e6f1ff] border-opacity-25 w-full"></div>
			</div>

			<div className="text-[#a2aabc] text-lg mt-5 mx-12 lg:mx-60 flex flex-col items-center text-justify">
				<div className="absolute inset-x-0 bottom-10 ">
					<div className="flex px-6 space-x-7">
						<a href="/">
							<img
								src={GitLogo}
								alt="Git Logo"
								className="w-10 h-10 text-yellow_vs hover:cursor-pointer hover:h-12 hover:w-12"
							/>
						</a>

						<a href="/">
							<img
								src={LinkedinLogo}
								alt="Linkedin Logo"
								className="w-10 h-10 text-yellow_vs hover:cursor-pointer hover:h-12 hover:w-12"
							/>
						</a>
						<a href="/">
							<img
								src={MailLogo}
								alt="Mail Logo"
								className="w-10 h-10 text-yellow_vs hover:cursor-pointer hover:h-12 hover:w-12"
							/>
						</a>
					</div>
				</div>

				<button className="w-1/2 p-3 mt-10 border rounded border-lightblue_vs text-lightblue_vs hover:bg-opacity-10 hover:bg-lightblue_vs">
					<a href="mailto:youssefkizou@gmail.com">
						<code>Contact</code>
					</a>
				</button>
			</div>
		</div>
	);
};

export default Contact;

// <code>
//           Currently looking for a new opportunity, you can contact me by
//           clicking on the button below. <br />
//           Whether you have a question or just want to say hi, feel free to
//           contact me and I’ll try my best to get back to you!
//         </code>
