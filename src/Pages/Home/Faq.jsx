import React from 'react';

const Faq = () => {
    return (
        <div className='w-10/12  mx-auto pt-10'>
            <div className="collapse collapse-arrow bg-base-100 border border-base-300">
                <input type="radio" name="my-accordion-2" defaultChecked />
                <div className="collapse-title font-semibold">What is this platform about?</div>
                <div className="collapse-content text-sm">Our platform helps users find and share product recommendations through community-driven queries and responses.</div>
            </div>
            <div className="collapse collapse-arrow bg-base-100 border border-base-300">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title font-semibold">How can I add a product query?</div>
                <div className="collapse-content text-sm">Once logged in, navigate to the 'My Queries' section, click on 'Add Query,' and provide the necessary details.</div>
            </div>
            <div className="collapse collapse-arrow bg-base-100 border border-base-300">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title font-semibold">Can I delete my recommendations?</div>
                <div className="collapse-content text-sm">Yes, users can delete their own recommendations anytime from the 'My Recommendations' section.</div>
            </div>
            <div className="collapse collapse-arrow bg-base-100 border border-base-300">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title font-semibold">Do I need an account to view queries?</div>
                <div className="collapse-content text-sm">No, non-logged-in users can view public queries but need an account to post or interact with them.</div>
            </div>
            <div className="collapse collapse-arrow bg-base-100 border border-base-300">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title font-semibold">Is my personal information safe?</div>
                <div className="collapse-content text-sm">Yes, we prioritize user privacy and security. Your personal data is protected and never shared with third parties.</div>
            </div>
        </div>
    );
};

export default Faq;