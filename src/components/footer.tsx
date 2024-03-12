import { ModeToggle } from "@/components/mode-toggle";

import { EnvelopeClosedIcon, GitHubLogoIcon, LinkedInLogoIcon, VideoIcon } from "@radix-ui/react-icons";


export default function Footer() {
    return (
        <div className="mt-8">
            <div className="flex flex-row items-center justify-center space-x-12">
                <a target="_blank" href='https://github.com/idarciooliveira'>
                    <GitHubLogoIcon height={24} width={24} />
                </a>
                <a target="_blank" href='www.linkedin.com/in/idarciooliveira'>
                    <LinkedInLogoIcon height={24} width={24} />
                </a>
                <a href="mailto:idarciooliveira@gmail.com">
                    <EnvelopeClosedIcon height={24} width={24} />
                </a>
                <a target="_blank" href='https://www.youtube.com/channel/UCcFx9D0sM4EbVkZ8jvo1-Tw'>
                    <VideoIcon height={24} width={24} />
                </a>

            </div>
        </div>
    )
}
