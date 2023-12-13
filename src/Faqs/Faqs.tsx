import * as Accordion from '@radix-ui/react-accordion'
import { Fragment } from 'react';
import { elements } from './Faqdata';
import { ChevronDown } from './ChevronDownIcon';

function Faqs() {
    return (
        <Fragment>
            <section id="faq" aria-label='frequently asked questions'>
                <h2>FAQs</h2>
                <figure className="container" aria-label='accordion content'>
                    <Accordion.Root className="AccordionRoot" type="single" defaultValue="item-1" collapsible>
                        <Accordion.Item className="AccordionItem" value="item-1">
                            <Accordion.Trigger className="AccordionTrigger">
                                <span>{elements.map(elem => <b key={elem.id}>{elem.question1}</b>)}</span>
                                <ChevronDown aria-hidden />
                            </Accordion.Trigger>
                            <Accordion.Content className="AccordionContent">
                                {elements.map(elem => <p key={elem.id}>{elem.answer1}</p>)}
                            </Accordion.Content>
                        </Accordion.Item>

                        <Accordion.Item className="AccordionItem" value="item-2">
                            <Accordion.Trigger className="AccordionTrigger">
                                <span>{elements.map(elem => <b key={elem.id}>{elem.question2}</b>)}</span>
                                <ChevronDown aria-hidden />
                            </Accordion.Trigger>
                            <Accordion.Content className="AccordionContent">
                                {elements.map(elem => <p key={elem.id}>{elem.answer2}</p>)}
                            </Accordion.Content>
                        </Accordion.Item>

                        <Accordion.Item className="AccordionItem" value="item-3">
                            <Accordion.Trigger className="AccordionTrigger">
                                <span>{elements.map(elem => <b key={elem.id}>{elem.question3}</b>)}</span>
                                <ChevronDown aria-hidden />
                            </Accordion.Trigger>
                            <Accordion.Content className="AccordionContent">
                                {elements.map(elem => <p key={elem.id}>{elem.answer3}</p>)}
                            </Accordion.Content>
                        </Accordion.Item>

                        <Accordion.Item className="AccordionItem" value="item-4">
                            <Accordion.Trigger className="AccordionTrigger">
                                <span>{elements.map(elem => <b key={elem.id}>{elem.question4}</b>)}</span>
                                <ChevronDown aria-hidden />
                            </Accordion.Trigger>
                            <Accordion.Content className="AccordionContent">
                                {elements.map(elem => <p key={elem.id}>{elem.answer4}</p>)}
                            </Accordion.Content>
                        </Accordion.Item>

                        <Accordion.Item className="AccordionItem" value="item-5">
                            <Accordion.Trigger className="AccordionTrigger">
                                <span>{elements.map(elem => <b key={elem.id}>{elem.question5}</b>)}</span>
                                <ChevronDown aria-hidden />
                            </Accordion.Trigger>
                            <Accordion.Content className="AccordionContent">
                                {elements.map(elem => <p key={elem.id}>{elem.answer5}</p>)}
                            </Accordion.Content>
                        </Accordion.Item>

                        <Accordion.Item className="AccordionItem" value="item-6">
                            <Accordion.Trigger className="AccordionTrigger">
                                <span>{elements.map(elem => <b key={elem.id}>{elem.question6}</b>)}</span>
                                <ChevronDown aria-hidden />
                            </Accordion.Trigger>
                            <Accordion.Content className="AccordionContent">
                                {elements.map(elem => <p key={elem.id}>{elem.answer6}</p>)}
                            </Accordion.Content>
                        </Accordion.Item>

                    </Accordion.Root>

                </figure>
            </section>

        </Fragment>
    )
};

export default Faqs