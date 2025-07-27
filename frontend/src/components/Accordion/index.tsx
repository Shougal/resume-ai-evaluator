import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDownIcon } from "lucide-react";
import "./styles.css";
/**
 *  This file is a wrapper for the @radix-ui/react-accordion component.
 *
 */

/**
 * The root accordion container.
 * @param param0  Accepts all props from Radix’s AccordionPrimitive.Root, like type="single" or collapsible
 * @returns Wraps the entire accordion
 */
function Accordion({
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Root>) {
  return <AccordionPrimitive.Root className="accordion" {...props} />;
}

/**
 * Represents one collapsible section
 * @param value="item-1" — required by Radix to track open state.
 * @param className — optional extra styles.
 * @returns a collapsible item
 */
function AccordionItem(
  props: React.ComponentProps<typeof AccordionPrimitive.Item>
) {
  return <AccordionPrimitive.Item className="accordion-item" {...props} />;
}

/**
 * clickable button that opens/closes the item.
 * @param children: typically a string like “Details”.
 * @param className: extra styling if needed.
 * @returns clickable button that opens/closes the item.
 */
function AccordionTrigger({
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Trigger>) {
  return (
    <AccordionPrimitive.Header className="accordion-header">
      <AccordionPrimitive.Trigger className="accordion-trigger" {...props}>
        {children}
        <ChevronDownIcon className="accordion-icon" />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
}

/**
 *  Holds the hidden/showing content for each section.
 * @param param0
 * @returns  hidden/showing content for each section.
 */
function AccordionContent({
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Content>) {
  return (
    <AccordionPrimitive.Content className="accordion-content" {...props}>
      <div className="accordion-content-inner">{children}</div>
    </AccordionPrimitive.Content>
  );
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
