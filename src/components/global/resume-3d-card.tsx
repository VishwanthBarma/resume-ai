import React from 'react'
import { CardBody, CardContainer, CardItem } from "@/components/global/3d-card";
import { CheckIcon } from 'lucide-react';
import { TextGenerateEffect } from './text-generate-effect';
import { TypewriterEffectSmooth } from './typewritter-effect';


interface Props {
    
}

const Resume3DCard = (props: Props) => {
    return (
        <div className=''>
            <CardContainer className="inter-var w-[24rem]">
              <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-neutral-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl p-4 border">
                <div className='flex items-end justify-between'>
                    <div className='text-[5px]'>
                        <CardItem>+206 1090 756 28</CardItem>
                        <CardItem>RichardJohn@gmail.com</CardItem>
                        <CardItem>Bercy, Paris</CardItem>
                    </div>
                    <CardItem className='font-bold'>
                        <TypewriterEffectSmooth words={[{text: 'John'}, {text: 'Richard'}]}/>
                    </CardItem>
                    <div className='text-[5px]'>
                        <CardItem>GitHub: JohnRichard</CardItem>
                        <CardItem>LinkedIn: JohnRichard</CardItem>
                    </div>
                </div>
                <hr className='my-1 h-[2px] bg-white rounded-full'></hr>
                <div>
                    <CardItem className='font-semibold text-[10px]'>Education</CardItem>
                    <div className='flex justify-between mt-1'>
                        <span className='h-[3px] w-3/5 bg-neutral-100 opacity-60 rounded-full'></span>
                        <span className='h-[3px] w-1/5 bg-neutral-400 opacity-50 rounded-full'></span>
                    </div>
                    <div className='flex justify-between mt-1'>
                        <span className='h-[3px] w-2/5 bg-neutral-100 opacity-60 rounded-full'></span>
                        <span className='h-[3px] w-1/5 bg-neutral-400 opacity-50 rounded-full'></span>
                    </div>
                </div>
                <hr className='my-1'></hr>
                <div>
                    <CardItem className='font-semibold text-[10px]'>Technical Experience</CardItem>
                    <div className='flex justify-between mt-1'>
                        <CardBody className='mb-[-378px]'>
                            <TextGenerateEffect  words='Software Developer @Microsoft'></TextGenerateEffect></CardBody>
                        
                    </div>
                    <div className='flex justify-between mt-1'>
                        <span className='h-[2px] w-full mx-3 bg-neutral-100 opacity-60 rounded-full'></span>
                    </div>
                    <div className='flex justify-between mt-[2px]'>
                        <span className='h-[2px] w-2/6 mx-3 bg-neutral-100 opacity-60 rounded-full'></span>
                    </div>
                    <div className='flex justify-between mt-1'>
                        <span className='h-[2px] w-full mx-3 bg-neutral-100 opacity-60 rounded-full'></span>
                    </div>
                    <div className='flex justify-between mt-[2px]'>
                        <span className='h-[2px] w-4/6 mx-3 bg-neutral-100 opacity-60 rounded-full'></span>
                    </div>

                    <div className='flex justify-between mt-1'>
                    <CardBody className='mb-[-378px]'>
                            <TextGenerateEffect  words='Full Stack Developer Intern @Uber'></TextGenerateEffect></CardBody>

                    </div>
                    <div className='flex justify-between mt-1'>
                        <span className='h-[2px] w-5/6 mx-3 bg-neutral-100 opacity-60 rounded-full'></span>
                    </div>
                    <div className='flex justify-between mt-[2px]'>
                        <span className='h-[2px] w-3/6 mx-3 bg-neutral-100 opacity-60 rounded-full'></span>
                    </div>
                    <div className='flex justify-between mt-1'>
                        <span className='h-[2px] w-full mx-3 bg-neutral-100 opacity-60 rounded-full'></span>
                    </div>
                    <div className='flex justify-between mt-[2px]'>
                        <span className='h-[2px] w-1/4 mx-3 bg-neutral-100 opacity-60 rounded-full'></span>
                    </div>
                </div>
                <hr className='my-1'></hr>
                <div>
                    <CardItem className='font-semibold text-[10px]'>Skills</CardItem>
                    <div className='flex justify-between mt-1'>
                        <span className='h-[3px] w-1/6 bg-neutral-100 opacity-60 rounded-full'></span>
                        <span className='h-[3px] w-1/6 bg-neutral-400 opacity-50 rounded-full'></span>
                        <span className='h-[3px] w-1/6 bg-neutral-100 opacity-60 rounded-full'></span>
                        <span className='h-[3px] w-1/6 bg-neutral-400 opacity-50 rounded-full'></span>
                        <span className='h-[3px] w-1/6 bg-neutral-100 opacity-60 rounded-full'></span>
                    </div>
                    <div className='flex justify-between mt-1'>
                        <span className='h-[3px] w-1/6 bg-neutral-400 opacity-50 rounded-full'></span>
                        <span className='h-[3px] w-1/6 bg-neutral-100 opacity-60 rounded-full'></span>
                        <span className='h-[3px] w-1/6 bg-neutral-400 opacity-50 rounded-full'></span>
                        <span className='h-[3px] w-2/6 bg-neutral-100 opacity-60 rounded-full'></span>
                    </div>
                    <div className='flex justify-start mt-1'>
                        <span className='h-[3px] w-2/6 bg-neutral-400 opacity-50 rounded-full mr-3'></span>
                        <span className='h-[3px] w-1/6 bg-neutral-100 opacity-60 rounded-full'></span>
                        
                    </div>
                </div>
                <hr className='my-1'></hr>
                <div>
                    <CardItem className='font-semibold text-[10px]'>Projects</CardItem>
                    <div className='flex justify-start mt-1 items-center'>
                        <span className='h-[4px] w-[4px] mr-1 bg-neutral-100 rounded-full'></span>
                        <CardBody className='mb-[-378px]'>
                            <TextGenerateEffect  words='Notion Clone | Next.js, TailwindCSS, Firebase, NextAuth.'></TextGenerateEffect></CardBody>
                            <span className='h-[3px] w-1/6 bg-neutral-100 opacity-70 rounded-full'></span>
                    </div>
                    <div className='flex justify-between mt-1'>
                        <span className='h-[2px] w-full mx-3 bg-neutral-100 opacity-60 rounded-full'></span>
                    </div>
                    <div className='flex justify-between mt-[2px]'>
                        <span className='h-[2px] w-2/6 mx-3 bg-neutral-100 opacity-60 rounded-full'></span>
                    </div>
                    <div className='flex justify-between mt-1'>
                        <span className='h-[2px] w-full mx-3 bg-neutral-100 opacity-60 rounded-full'></span>
                    </div>
                    <div className='flex justify-between mt-[2px]'>
                        <span className='h-[2px] w-4/6 mx-3 bg-neutral-100 opacity-60 rounded-full'></span>
                    </div>

                    <div className='flex justify-between mt-1'>
                    <span className='h-[4px] w-[4px] mr-1 bg-neutral-100 rounded-full'></span>
                        <CardBody className='mb-[-378px]'>
                            <TextGenerateEffect  words='Real-Time Chat Application (TCP/IP) | Java, SpringBoot, PostgreSQL, AWS.'></TextGenerateEffect></CardBody>
                            <span className='h-[3px] w-1/6 bg-neutral-100 opacity-70 rounded-full'></span>
                    </div>
                    <div className='flex justify-between mt-1'>
                        <span className='h-[2px] w-1/4 mx-3 bg-neutral-100 opacity-60 rounded-full'></span>
                    </div>
                    <div className='flex justify-between mt-[2px]'>
                        <span className='h-[2px] w-3/6 mx-3 bg-neutral-100 opacity-60 rounded-full'></span>
                    </div>
                    <div className='flex justify-between mt-1'>
                        <span className='h-[2px] w-full mx-3 bg-neutral-100 opacity-60 rounded-full'></span>
                    </div>
                    <div className='flex justify-between mt-[2px]'>
                        <span className='h-[2px] w-1/4 mx-3 bg-neutral-100 opacity-60 rounded-full'></span>
                    </div>
                    <div className='flex justify-between mt-1'>
                        <span className='h-[4px] w-[4px] mr-1 bg-neutral-100 rounded-full'></span>
                        <CardBody className='mb-[-378px]'>
                                <TextGenerateEffect  words='Fitness Tracking App | Flutter, Firebase, Dart, Firestore.'></TextGenerateEffect></CardBody>
                                <span className='h-[3px] w-1/6 bg-neutral-100 opacity-70 rounded-full'></span>
                    </div>
                    <div className='flex justify-between mt-1'>
                        <span className='h-[2px] w-full mx-3 bg-neutral-100 opacity-60 rounded-full'></span>
                    </div>
                    <div className='flex justify-between mt-[2px]'>
                        <span className='h-[2px] w-2/6 mx-3 bg-neutral-100 opacity-60 rounded-full'></span>
                    </div>
                    <div className='flex justify-between mt-1'>
                        <span className='h-[2px] w-full mx-3 bg-neutral-100 opacity-60 rounded-full'></span>
                    </div>
                    <div className='flex justify-between mt-[2px]'>
                        <span className='h-[2px] w-4/6 mx-3 bg-neutral-100 opacity-60 rounded-full'></span>
                    </div>

                    <div className='flex justify-between mt-1'>
                    <span className='h-[4px] w-[4px] mr-1 bg-neutral-100 rounded-full'></span>
                        <CardBody className='mb-[-378px]'>
                                <TextGenerateEffect  words='Weather Forecasting App | React Native, OpenWheatherMap API, Redux, Expo.'></TextGenerateEffect></CardBody>
                                <span className='h-[3px] w-1/6 bg-neutral-100 opacity-70 rounded-full'></span>
                    </div>
                    <div className='flex justify-between mt-1'>
                        <span className='h-[2px] w-5/6 mx-3 bg-neutral-100 opacity-60 rounded-full'></span>
                    </div>
                    <div className='flex justify-between mt-[2px]'>
                        <span className='h-[2px] w-3/6 mx-3 bg-neutral-100 opacity-60 rounded-full'></span>
                    </div>
                    <div className='flex justify-between mt-1'>
                        <span className='h-[2px] w-full mx-3 bg-neutral-100 opacity-60 rounded-full'></span>
                    </div>
                    <div className='flex justify-between mt-[2px]'>
                        <span className='h-[2px] w-1/4 mx-3 bg-neutral-100 opacity-60 rounded-full'></span>
                    </div>
                </div>
                <hr className='my-1'></hr>
                <div>
                    <CardItem className='font-semibold text-[10px]'>Certifications</CardItem>
                    <div className='flex justify-between mt-1'>
                    <CardBody className='mb-[-378px]'>
                            <TextGenerateEffect  words='Certificate of AI and Machine Learning @Cb University'></TextGenerateEffect></CardBody>
                        <span className='h-[3px] w-1/12 bg-neutral-400 opacity-50 rounded-full'></span>
                    </div>
                    <div className='flex justify-between mt-1'>
                    <CardBody className='mb-[-378px]'>
                            <TextGenerateEffect  words='Certificate of Flask Web Developement @180 Acedemy'></TextGenerateEffect></CardBody>
                        <span className='h-[3px] w-1/12 bg-neutral-400 opacity-50 rounded-full'></span>
                    </div>
                </div>
                <hr className='my-1'></hr>
                <div>
                    <CardItem className='font-semibold text-[10px]'>Achievements</CardItem>
                    <div className='flex justify-between mt-1'>
                        <span className='h-[3px] w-1 mr-1 bg-neutral-100 opacity-90 rounded-full'></span>
                        <span className='h-[3px] w-full bg-neutral-400 opacity-50 rounded-full'></span>
                    </div>
                    <div className='flex justify-between mt-1 ml-2'>
                        <span className='h-[3px] w-6/12 bg-neutral-400 opacity-50 rounded-full'></span>
                    </div>
                    <div className='flex justify-between mt-1'>
                        <span className='h-[3px] w-1 mr-1 bg-neutral-100 opacity-90 rounded-full'></span>
                        <span className='h-[3px] w-full bg-neutral-400 opacity-50 rounded-full'></span>
                    </div>
                    <div className='flex justify-between mt-1 ml-2'>
                        <span className='h-[3px] w-full bg-neutral-400 opacity-50 rounded-full'></span>
                    </div>
                    <div className='flex justify-between mt-1 ml-2'>
                        <span className='h-[3px] w-2/12 bg-neutral-400 opacity-50 rounded-full'></span>
                    </div>
                    <div className='flex justify-between mt-1'>
                        <span className='h-[3px] w-1 mr-1 bg-neutral-100 opacity-90 rounded-full'></span>
                        <span className='h-[3px] w-full bg-neutral-400 opacity-50 rounded-full'></span>
                    </div>
                    <div className='flex justify-between mt-1 ml-2'>
                        <span className='h-[3px] w-8/12 bg-neutral-400 opacity-50 rounded-full'></span>
                    </div>
                    <div className='flex justify-between mt-1'>
                        <span className='h-[3px] w-1 mr-1 bg-neutral-100 opacity-90 rounded-full'></span>
                        <span className='h-[3px] w-full bg-neutral-400 opacity-50 rounded-full'></span>
                    </div>
                    <div className='flex justify-between mt-1 ml-2'>
                        <span className='h-[3px] w-full bg-neutral-400 opacity-50 rounded-full'></span>
                    </div>
                    <div className='flex justify-between mt-1 ml-2'>
                        <span className='h-[3px] w-3/12 bg-neutral-400 opacity-50 rounded-full'></span>
                    </div>
                </div>

              </CardBody>
            </CardContainer>
        </div>
    )
}

export default Resume3DCard
