import React, { useState } from "react";
import { ChevronDownIcon, ChevronRightIcon } from "@heroicons/react/solid";

const GitLogo = require("../assets/logos/GitLogo.png");
const LinkedinLogo = require("../assets/logos/LinkedinLogo.png");
// const KaggleLogo = require("../assets/logos/KaggleLogo.png");
const MailLogo = require("../assets/logos/MailLogo.png");

const JSIcon = require("../assets/icons/JSIcon.png");
const TSIcon = require("../assets/icons/TSIcon.png");

const LeftBar = () => {
  const [showWebList, SetShowWebList] = useState(true);
  const [showProjectsList, SetShowProjectsList] = useState(true);

  const WebList = () => (
		<div>
			<a href="https://github.com/shaymk1/">
				<div className="ml-12 flex items-center hover:cursor-pointer hover:bg-opacity-80 hover:bg-[#2b2a2a] w-60">
					<img
						src={JSIcon}
						alt="JS Icon"
						className="ml-5 mr-1 w-7 text-yellow_vs"
					/>

					<p>Live demo/ First Project</p>
				</div>
			</a>
			<a href="https://github.com/shaymk1/">
				<div className="ml-12 flex items-center hover:cursor-pointer hover:bg-opacity-80 hover:bg-[#2b2a2a] w-60">
					<img
						src={TSIcon}
						alt="TS Icon"
						className="ml-5 mr-1 w-7 text-yellow_vs"
					/>
					<p>Second Project</p>
				</div>
			</a>
			<a href="/">
				<div className="flex whitespace-nowrap items-center hover:cursor-pointer hover:bg-opacity-80 hover:bg-[#2b2a2a] focus:bg-slate-300 ml-12 w-60">
					<img
						src={JSIcon}
						alt="JS Icon"
						className="ml-5 mr-1 w-7 text-yellow_vs"
					/>
					<p>Third Project</p>
				</div>
			</a>
			<a href="/">
				<div className="flex whitespace-nowrap items-center hover:cursor-pointer hover:bg-opacity-80 hover:bg-[#2b2a2a] ml-12 w-60">
					<img
						src={JSIcon}
						alt="JS Icon"
						className="ml-5 mr-1 w-7 text-yellow_vs"
					/>
					<p>Fourth Project</p>
				</div>
			</a>
		</div>
	);

  return (
		<div className="text-[#a2aabc] text-lg mt-5 flex bg-[#262526] h-full">
			<div>
				<div
					className="flex items-center hover:cursor-pointer hover:bg-opacity-80 hover:bg-[#2b2a2a] font-bold w-72"
					onClick={() => SetShowProjectsList(!showProjectsList)}
				>
					{showProjectsList ? (
						<ChevronDownIcon className="mr-1 w-7" />
					) : (
						<ChevronRightIcon className="mr-1 w-7" />
					)}
					<p>Projects</p>
				</div>
				{showProjectsList ? (
					<>
						<div
							className="flex items-center hover:cursor-pointer hover:bg-opacity-80 hover:bg-[#2b2a2a] font-bold w-72"
							onClick={() => SetShowWebList(!showWebList)}
						>
							{showWebList ? (
								<ChevronDownIcon className="ml-5 mr-1 w-7" />
							) : (
								<ChevronRightIcon className="ml-5 mr-1 w-7" />
							)}

							<p>My Projects</p>
						</div>
						{showWebList ? <WebList /> : null}
					</>
				) : null}
				<div className="absolute inset-x-0 bottom-10 ">
					<div className="flex px-6 space-x-7">
						<a href="https://github.com/shaymk1/">
							<img
								src={GitLogo}
								alt="Git Logo"
								className="w-10 h-10 text-yellow_vs hover:cursor-pointer hover:h-12 hover:w-12"
							/>
						</a>

						<a href="https://Linkedin.com">
							<img
								src={LinkedinLogo}
								alt="Linkedin Logo"
								className="w-10 h-10 text-yellow_vs hover:cursor-pointer hover:h-12 hover:w-12"
							/>
						</a>
						<a href="mailto:mkekae@gmail.com">
							<img
								src={MailLogo}
								alt="Mail Logo"
								className="w-10 h-10 text-yellow_vs hover:cursor-pointer hover:h-12 hover:w-12"
							/>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default LeftBar;
// <a href="/">
//               <img
//                 src={KaggleLogo}
//                 alt="Kaggle Logo"
//                 className="w-10 h-10 text-yellow_vs hover:cursor-pointer hover:h-12 hover:w-12"
//               />