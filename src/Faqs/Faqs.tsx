import * as Accordion from '@radix-ui/react-accordion'
import { Fragment } from 'react';
import { elements } from './Faqdata';
import { ChevronDown } from './ChevronDownIcon';

function Faqs() {
    return (
        <Fragment>
            <section id="faq">
                <h2>FAQs</h2>
                <div className="container">
                    <Accordion.Root className="AccordionRoot" type="single" defaultValue="item-1" collapsible>
                        <Accordion.Item className="AccordionItem" value="item-1">
                            <Accordion.Trigger className="AccordionTrigger">
                                <span>{elements.map(elem => <h3 key={elem.id}>{elem.question1}</h3>)}</span>
                                <ChevronDown />
                            </Accordion.Trigger>
                            <Accordion.Content className="AccordionContent">
                                {elements.map(elem => <p key={elem.id}>{elem.answer1}</p>)}
                            </Accordion.Content>
                        </Accordion.Item>

                        <Accordion.Item className="AccordionItem" value="item-2">
                            <Accordion.Trigger className="AccordionTrigger">
                                <span>{elements.map(elem => <h3 key={elem.id}>{elem.question2}</h3>)}</span>
                                <ChevronDown />
                            </Accordion.Trigger>
                            <Accordion.Content className="AccordionContent">
                                {elements.map(elem => <p key={elem.id}>{elem.answer2}</p>)}
                            </Accordion.Content>
                        </Accordion.Item>

                        <Accordion.Item className="AccordionItem" value="item-3">
                            <Accordion.Trigger className="AccordionTrigger">
                                <span>{elements.map(elem => <h3 key={elem.id}>{elem.question3}</h3>)}</span>
                                <ChevronDown />
                            </Accordion.Trigger>
                            <Accordion.Content className="AccordionContent">
                                {elements.map(elem => <p key={elem.id}>{elem.answer3}</p>)}
                            </Accordion.Content>
                        </Accordion.Item>

                        <Accordion.Item className="AccordionItem" value="item-4">
                            <Accordion.Trigger className="AccordionTrigger">
                                <span>{elements.map(elem => <h3 key={elem.id}>{elem.question4}</h3>)}</span>
                                <ChevronDown />
                            </Accordion.Trigger>
                            <Accordion.Content className="AccordionContent">
                                {elements.map(elem => <p key={elem.id}>{elem.answer4}</p>)}
                            </Accordion.Content>
                        </Accordion.Item>

                        <Accordion.Item className="AccordionItem" value="item-5">
                            <Accordion.Trigger className="AccordionTrigger">
                                <span>{elements.map(elem => <h3 key={elem.id}>{elem.question5}</h3>)}</span>
                                <ChevronDown />
                            </Accordion.Trigger>
                            <Accordion.Content className="AccordionContent">
                                {elements.map(elem => <p key={elem.id}>{elem.answer5}</p>)}
                            </Accordion.Content>
                        </Accordion.Item>

                        <Accordion.Item className="AccordionItem" value="item-6">
                            <Accordion.Trigger className="AccordionTrigger">
                                <span>{elements.map(elem => <h3 key={elem.id}>{elem.question6}</h3>)}</span>
                                <ChevronDown />
                            </Accordion.Trigger>
                            <Accordion.Content className="AccordionContent">
                                {elements.map(elem => <p key={elem.id}>{elem.answer6}</p>)}
                            </Accordion.Content>
                        </Accordion.Item>

                    </Accordion.Root>

                </div>
            </section>

        </Fragment>
    )
};

export default Faqs