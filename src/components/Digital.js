import { React } from 'react'
import '../style/Digital/Digital.css'
import EButton from './hooks/ExploreButton';
import Button from './hooks/ModernButton';
import image from '../images/other/Digital-Marketing-Course.png'
import image2 from '../images/Our-Courses.png'
import image3 from '../images/Full-stack.png'
import image4 from '../images/ADM-1024x288.webp'
import logo1 from '../images/icon/SEO 1.png'
import logo2 from '../images/logo/Deadline 1.png';
import logo3 from '../images/logo/Certificate 2.png';
import logo4 from '../images/logo/IT Support.png';
import logo5 from '../images/logo/download (5).png';
import logo6 from '../images/logo/download (1).png';
import logo7 from '../images/logo/download (2).png';
import logo8 from '../images/logo/download (3).png';
import logo9 from '../images/logo/download (4).png';
import logo10 from '../images/other/04_Services-3.png';
import Digital_Card from './hooks/Digital_Card';
import ImageCarousel from './hooks/ImageCarousel';
import Digital_S from './hooks/Digital_S';
import { useScrollAnimation } from './hooks/Animation';
export default function Digital() {
    useScrollAnimation();
    const data = [
        {
            title: "What is the mode of training for the digital marketing course at Destination Techs?",
            content: (
                <div className='Di-content'>
                    <p>The digital marketing training at Destination Techs is conducted online, allowing students to learn from the comfort of their homes or any convenient location with an internet connection. This flexible mode of learning ensures that you can access the course material and interact with instructors without any geographical constraints.</p>
                </div>
            )
        },
        {
            title: "What is the duration of the digital marketing course at Destination Techs?",
            content: (
                <div className='Di-content'>
                    <p>The course duration is 2 months, followed by a 1-month internship. In this comprehensive 2-month training, you will cover all essential aspects of digital marketing, and the 1-month internship will provide you with practical experience to apply your skills in real-world scenarios.</p>
                </div>
            )
        },
        {
            title: "What are the major modules covered in the digital marketing course?",
            content: (
                <div className='Di-content'>
                    <p>Our digital marketing course covers 15 major modules, including but not limited to Search Engine Optimization (SEO), Social Media Marketing (SMM), Pay-Per-Click (PPC) Advertising, Email Marketing, Content Marketing, Web Analytics, and more. The comprehensive curriculum is designed to equip you with the knowledge and skills needed to excel in the digital marketing landscape.</p>
                </div>
            )
        },
        {
            title: "What is the course fee, and what does it cover?",
            content: (
                <div className='Di-content'>
                    <p>The course fee for the digital marketing training is 20,000 INR. This fee covers the entire 2-month course, including access to all learning materials, live online sessions with expert instructors, practical assignments, and guidance throughout the 1-month internship. Additionally, the fee covers the cost of resume building, LinkedIn profile optimization, and interview preparation support to enhance your job prospects.</p>
                </div>
            )
        },
        {
            title: "Does Destination Techs provide placement assistance after completing the course?",
            content: (
                <div className='Di-content'>
                    <p>Yes, at Destination Techs, we offer placement support to our students. Our team will assist you in preparing for job interviews, refining your job search strategy, and connecting you with relevant job opportunities in the digital marketing field. We strive to support you in finding suitable employment to kickstart your career in the dynamic world of digital marketing.</p>
                </div>
            )
        },
        {
            title: "How can I enroll for the digital marketing course at Destination Techs?",
            content: (
                <div className='Di-content'>
                    <p>To enroll in the digital marketing course, you can contact us at
                        <span><a style={{ color: 'aqua' }} href="mailto:support@destinationtechs.com" target="_new">support@destinationtechs.com</a></span>
                        Our support team will guide you through the enrollment process, provide further details about the course, and address any queries you may have.</p>
                    <p>We look forward to helping you embark on a rewarding journey in the field of digital marketing at Destination Techs!</p>
                </div>
            )
        },
    ];
    const accordionData = [
        {
            title: "Module 0: Introduction to Digital Marketing",
            content: (
                <div className='Di-content'>
                    <p><span style={{ textDecoration: 'underline' }}>Discover the fundamentals of digital marketing
                        through this module&nbsp; "Introduction to Digital Marketing." </span></p>
                    <ul>
                        <li>Gain insights into the significance of marketing, explore the 4Ps of Marketing
                            (Product, Price, Place, Promotion), delve into segmentation, targeting, and
                            positioning (STP).&nbsp;</li>
                        <li>Learn how to evaluate market size, explore diverse strategies of media-based
                            marketing, understand the pivotal role of marketing within an organization, and
                            familiarize yourself with essential terms used in the field of marketing.</li>
                    </ul>
                    <p><strong><span style={{ textDecoration: 'underline' }}><em>Project : List out the Companies
                        that require Marketing Online</em></span></strong></p>
                </div>
            )
        },
        {
            title: "Module 1 : Digital Marketing Concepts",
            content: (
                <div className='Di-content'>
                    <p><strong><span style={{ textDecoration: 'underline' }}>Digital
                        Marketing Introduction:</span></strong> The Origin &amp;
                        Evolution of Digital Marketing, the Importance of Digital
                        Marketing, and the Relevance of Tailored Marketing, Channels
                        &amp; Communication for Different Businesses. Digital Marketing
                        Mindmap, the Digital Ads Market in India, and Digital Marketing
                        Models – B2B, B2C, B2B2C, H2H.</p>
                    <p>Acquiring Digital Marketing Skills and Understanding Roles &amp;
                        Responsibilities, Exploring Job Opportunities in Companies,
                        Agencies, and Freelancing.</p>
                    <p><strong><span style={{ textDecoration: 'underline' }}><em>Project :
                        Build a Digital Marketing Channels for a Popular
                        Companies</em></span></strong></p>
                </div>
            )
        },
        {
            title: "Module 2: WordPress Website Development",
            content: (
                <div className='Di-content'>
                    <p><span style={{ textDecoration: 'underline' }}>A Complete UI / UX Website Designing using
                        WordPress.&nbsp;</span></p>
                    <p>What are Domain, Hosting &amp; Platforms to Design Websites?. How to Write Posts, Create
                        Pages, Basic settings of WordPress, Installation of Themes, Plugins and Configuration.
                        Navigation menus, Introduction to Page Builders (Elementor, Divi &amp; WP Page Bakery),
                        How to professionally design web pages, Introduction to Blogs and How to create them.
                        Advanced UI / UX Designs. Advanced Plugins for Website Designing. Header &amp; Footer
                        using Elementor. How to host wordpress to hosting (shared &amp; dedicated) using
                        cPanel.&nbsp;</p>
                    <p><strong><em><span style={{ textDecoration: 'underline' }}>Project : Build a Personal Portfolio
                        Website and Host it Online&nbsp;</span></em></strong></p>
                </div>
            )
        },
        {
            title: "Module 3: Search Engine Optimization (SEO)",
            content: (
                <div className='Di-content'>
                    <p><span style={{ textDecoration: 'underline' }}><strong>Introduction to
                        SEO:</strong></span></p>
                    <p>Understanding SEO and Its Significance, How Search Engine Bots
                        Discover Websites and Pages, Roles and Responsibilities of SEO
                        Team, Exploring On-Page SEO and Off-Page SEO</p>
                    <p><strong>Part-1: On-Page SEO &amp; Technical SEO:</strong></p>
                    <p>Covering Domain Optimization, URL Optimization, Sitemap Creation,
                        Site Structure and Navigation, URL Structure, Breadcrumbs,
                        Domain Authority, Page Authority, Canonical Tags, Meta Tags,
                        Keyword Research, Heading Tags (H1 to H6), Image Optimization
                        with Title and Alt Text, Internal Linking, Mobile Friendliness,
                        Page Load Time &amp; Speed Suggestions, Redirection, SSL
                        Certificate (Secure Sockets Layer), Robots.txt, Sitemap Creation
                        &amp; Submission, Schema Markup, Featured Snippets, Noindex,
                        Nofollow Tags, Canonical URLs/Tags, Broken/Dead Links</p>
                    <p><strong>Part-2: Off-Page SEO:</strong></p>
                    <p>Introduction to Off-Page SEO, Understanding Follow Vs. Nofollow
                        Links, Search Engine Submissions, Business Listings, Directory
                        Submissions, Social Bookmarking, Classified Ads, PDF/PPT
                        Submissions, Article Submissions, Press Release Submissions,
                        Image Submissions, Video Submissions, Forum Submissions, Blog
                        Commenting, Guest Posting, Google Local Business Listing,
                        Off-Page Competitor Analysis for Traffic Sources, Backlinks
                        &amp; Blogs, Updates from Google, Web 2.0</p>
                    <p><strong><em><span style={{ textDecoration: 'underline' }}>Project :
                        Create 5 Blogs and Optimize the ON-Page, Technical
                        and OFF-Page in a niche based
                        website&nbsp;</span></em></strong></p>
                </div>
            )
        },
        {
            title: "Module 4: Google Ads, Display Ads",
            content: (
                <div className='Di-content'>
                    <p><span style={{ textDecoration: 'underline' }}><strong>Why Choose Paid
                        Media Marketing?</strong></span></p>
                    <p>Explore the Benefits of Paid Media Marketing and Learn how to
                        Optimize Your Budget for both Organic and Paid Media Strategies.
                        Familiarize Yourself with Various Platforms and Techniques for
                        Ad Optimization.</p>
                    <p><span style={{ textDecoration: 'underline' }}>Terminology:</span></p>
                    <p>Understand Key Marketing Terms like Awareness, Engagement,
                        Acquisition, Advocacy, and Retention. Discover Examples of
                        Effective Marketing Campaigns and Learn about KPIs and
                        Measurement for Performance &amp; Branding Campaigns. Utilize
                        Essential Tools like Social Media Ads, Google Ads, UTM Builder,
                        and MS Excel.</p>
                    <p><span style={{ textDecoration: 'underline' }}>Google Ads:</span></p>
                    <p>Get an Overview of Search Engine Marketing and Introduce Yourself
                        to Google Ads, including the Auction Model, Bids, Keywords, and
                        Search Ads. Explore Account Structure with Campaigns, Ad Groups,
                        Keywords, and Themes. Delve into Important Metrics such as Click
                        Through Rate (CTR), Cost per Click (CPC), Conversion, Conversion
                        Rate, Cost per Acquisition (CPA), Cost per Lead (CPL), Real-Time
                        Bidding, Clicks, and Impressions. Discover Google Ads Best
                        Practices and learn to Work Efficiently with Keywords while
                        Optimizing Your Keyword Strategy for Ads.</p>
                    <p><span style={{ textDecoration: 'underline' }}>Types of Google Ads
                        Campaigns:</span></p>
                    <p>Learn about Different Google Ads Campaign Types, including Search
                        (SERP), Display (Banner Ads), Video (YouTube Ads), App
                        (Playstore Ads), and Shopping (SERP). Engage in a Campaign
                        Design Exercise for Search Ads, Writing Compelling Ads in Google
                        Ads, Creating and Managing Ad Campaigns, and Analyzing Ads
                        Reporting and Account Performance. Integrate Google Analytics
                        with Google Ads and Leverage the Ads Report in Google Analytics.
                        Optimize Your Campaigns through Metrics Evaluation and Implement
                        Techniques like Responsive Search Ads, Dynamic Keyword
                        Insertion, Smart PLAs, Parametric Ads, and Conversion Tracking
                        in Google Ads. Integrate Google Ads with Your CRM for Seamless
                        Performance Analysis.</p>
                    <p><span style={{ textDecoration: 'underline' }}>Shopping Ads:</span></p>
                    <p>Learn about Product Listing Ads, Feed Setup &amp; Management,
                        Bidding, and Campaign Optimization. Explore App Install Ads -
                        UAC (Universal App Campaigns), Campaign Design, Optimization,
                        and Event Tracking &amp; Measurement.</p>
                    <p><span style={{ textDecoration: 'underline' }}>Banner/Display
                        Ads:</span></p>
                    <p>Discover the Power of Banner/Display Ads and Targeting Techniques
                        such as In-Market Segment, Responsive Display Ads, Affinity
                        Audience, and Placement. Learn how to Create Engaging Banner Ads
                        and Optimize Google Display Network Results. Evaluate whether
                        GDN (Google Display Network) is the Right Choice for Your Ads
                        and Explore Native Ads.</p>
                    <p><span style={{ textDecoration: 'underline' }}>YouTube Ads:</span></p>
                    <p>Explore Various Types of Video Ads and Learn How to Advertise on
                        YouTube effectively. Launch an Ad Campaign on YouTube using
                        YouTube Studio and Acquire Tips for Optimizing Your Video Ads.
                        Discover Useful Tools like YouTube, YouTube Studio, and VidIQ to
                        enhance your YouTube marketing efforts.</p>
                    <p><span style={{ textDecoration: 'underline' }}>Audio Ads:</span></p>
                    <p>Understand the Purpose of Audio Ads and Familiarize Yourself with
                        Podcast Advertising Terminology. Explore Different Types of
                        Podcast Ads and Platforms like Spotify Ads and YouTube
                        Audio-Only Ads.</p>
                    <p><span style={{ textDecoration: 'underline' }}><strong>Live
                        Project:</strong></span></p>
                    <p>Engage in a Live Project where you will Create an Ad on Google
                        Search and Measure the Relevant Metrics to assess the campaign's
                        performance.</p>
                </div>
            )
        },
        {
            title: "Module 5: Google My Business",
            content: (
                <div className='Di-content'>
                    <p><span style={{ textDecoration: 'underline' }}><strong>Local SEO (Google My Business &amp;
                        Citations):</strong></span></p>
                    <p>Learn the Essentials of Local SEO, including Setting Up and Optimizing Google My Business
                        (GMB) Listings. Standardize NAP (Name, Address, Phone Number) across all online
                        platforms for Consistency. Utilize Events and Updates to Engage with Local Customers and
                        Boost Local Visibility. Explore Citations and how they Impact Local Rankings. Optimize
                        Your Local SEO Strategy to Rank Higher on Local Keywords and Attract Relevant Local
                        Traffic.</p>
                </div>
            )
        },
        {
            title: "Module 6: Google Analytics &amp; Google TagManager",
            content: (
                <div className='Di-content'>
                    <p><strong>Google Analytics</strong></p>
                    <p>Google Analytics Walkthrough, How to Set Up Google Analytics, Google Analytics Dimensions
                        and Metrics, Hierarchy in Google Analytics, Account Setup, Property Setup, View Setup,
                        Integration with Website, Admin Panel Navigation, Custom Reports, Share/Download
                        Reports, Acquisition Reports, Behavior Reports, Conversion Reports, Audience Report,
                        Performance Metrics using Google Analytics – Sessions, Visits, Users, Average time on
                        page, Bounce Rate, Exit Rate,&nbsp;Understanding Data patterns, Outliers, Trends,
                        Graphing &amp; Visualization, Setting up calculated fields, Pivots, and filters</p>
                    <p><strong>Google Tag Manager</strong></p>
                    <p>Google Tag Manager – Setup, Events, Triggers, Data Layers, Analytics Reporting – Linking
                        to other platforms such as AdWords, Search Console, Setting up Dashboards, Templates,
                        Behavior Flow checks, Terminology – Pixel tracking, Attribution, Sampling, Enhanced
                        Ecommerce, Google Data studio Setup – reporting, automatic email setup, Alerts,
                        Outlier/anomaly detection</p>
                </div>
            )
        },
        {
            title: "Module 7: Content Writing, Distribution &amp; ContentMarketing",
            content: (
                <div className='Di-content'>
                    <p><span className='class'><strong>Google
                        Analytics:</strong></span></p>
                    <p>Google Analytics provides a comprehensive walkthrough to help you
                        understand and navigate its features. Learn how to set up Google
                        Analytics for your website, including dimensions and metrics.
                        Familiarize yourself with the hierarchy in Google Analytics,
                        involving account setup, property setup, and view setup.
                        Integrate Google Analytics with your website seamlessly and
                        navigate through the admin panel effortlessly. Create custom
                        reports, share and download them for insightful analysis.
                        Explore essential reports like Acquisition, Behavior,
                        Conversion, and Audience Reports to gain valuable insights.
                        Analyze performance metrics like Sessions, Visits, Users,
                        Average Time on Page, Bounce Rate, and Exit Rate. Gain an
                        understanding of data patterns, detect outliers, and spot trends
                        using graphs and visualizations. Set up calculated fields,
                        pivots, and filters for precise data interpretation.</p>
                    <p><span className='class'><strong>Google Tag
                        Manager:</strong></span></p>
                    <p>Learn how to set up Google Tag Manager to efficiently manage
                        tags, events, triggers, and data layers. Integrate Google
                        Analytics reporting with other platforms like AdWords and Search
                        Console for a holistic view of your data. Set up dashboards,
                        create templates, and perform behavior flow checks to optimize
                        your performance tracking. Get familiar with important
                        terminology such as pixel tracking, attribution, sampling, and
                        enhanced ecommerce for better understanding. Discover Google
                        Data Studio Setup for streamlined reporting, automatic email
                        setup, and utilize alerts for anomaly detection.</p>
                </div>
            )
        },
        {
            title: "Module 8: Social Media Marketing",
            content: (
                <div className='Di-content'>
                    <p><span className='class'><strong>Key Concepts
                        &amp; Social Media Marketing:</strong></span></p>
                    <p>Understand the Importance of Brand Guidelines and Aligning Social
                        Media Strategy with the Brand's Goals. Craft Effective Social
                        Media Strategies that Target the Right Audience, Deliver the
                        Message, and Follow Best Practices. Learn to Identify and
                        Optimize Fake Followers and Explore the Power of Influencer
                        Partnerships.</p>
                    <p>Social Media Marketing &amp; Optimization:</p>
                    <p>Discover Strategies for Effective Social Media Marketing and
                        Optimization on Major Platforms like Facebook, Instagram,
                        Twitter, LinkedIn, and Pinterest. Build a Strong Social Presence
                        for Your Brand and Implement Social Media Optimization (SMO)
                        Techniques. Explore Various Types of Content for Social Media,
                        including Informational, Educational, Explainer, Entertainer,
                        Contests, Topical Series, and Brand Education. Utilize Content
                        Repurposing, Follow Seasonality Trends, and Engage in
                        Collaborations and Employer Branding Activities.</p>
                    <p><span className='class'>Terminologies:</span>
                    </p>
                    <p>Familiarize Yourself with Key Social Media Terminologies such as
                        Likes, Shares, Retweets, Comments, Reach, Organic Share,
                        Followers, Influencers, Captions, Hashtags, Alt-Text, Filters,
                        Tags, and Image Tags.</p>
                    <p><span className='class'>Social Media Posts
                        Distribution Plan &amp; Execution:</span></p>
                    <p>Create a Social Media Activity Calendar to Plan, Create,
                        Distribute, and Engage with Content Effectively. Optimize Social
                        Media Posts to Master Different Post Types like Newsfeed, Story,
                        Video, and Thumb Stoppers. Harness the Power of Hashtags for
                        Better Reach and Engagement.</p>
                    <p><span className='class'>Social Media Key Metrics
                        &amp; Analytics:</span></p>
                    <p>Learn Key Metrics and Analytics for Social Media Platforms like
                        LinkedIn, Facebook, Instagram, Twitter, and Pinterest. Measure
                        the Performance of Your Social Media Efforts and Gain Valuable
                        Insights for Improvement.</p>
                    <p>&nbsp;</p>
                    <p>Engage in a Hands-On Project where You Will Create and Distribute
                        Social Media Posts to Apply the Concepts Learned and Showcase
                        Your Social Media Marketing Skills.</p>
                </div>
            )
        },
        {
            title: "Module 9: YouTube Marketing",
            content: (
                <div className='Di-content'>
                    <p><span className='class'><strong>YouTube
                        Marketing:</strong></span></p>
                    <p>YouTube Marketing refers to the use of YouTube as a platform to
                        promote products, services, or content to a targeted audience.
                        It is different from other marketing channels because it
                        primarily relies on video content to engage and communicate with
                        users, offering a visual and interactive approach to marketing.
                    </p>
                    <p><span className='class'>Creating a YouTube
                        Channel:</span></p>
                    <p>Begin your YouTube Marketing journey by creating a YouTube
                        channel. This process involves setting up an account, choosing a
                        channel name, and customizing the channel layout to align with
                        your brand.</p>
                    <p><span className='class'>YouTube Channel
                        Optimization:</span></p>
                    <p>Optimize your YouTube channel to maximize visibility and appeal
                        to viewers. This includes creating a visually appealing channel
                        banner, writing an engaging channel description, and organizing
                        your video playlists effectively.</p>
                    <p><span className='class'>Adding &amp; Managing
                        Multiple Channels:</span></p>
                    <p>Learn how to add and manage multiple channels, allowing you to
                        target different audience segments or offer content in various
                        niches.</p>
                    <p><span className='class'>Manage Channel
                        Permissions:</span></p>
                    <p>Control who can access and contribute to your channel by managing
                        channel permissions, ensuring the security and integrity of your
                        content.</p>
                    <p><span className='class'>YouTube Brand
                        Guideline:</span></p>
                    <p>Follow YouTube's brand guidelines to maintain consistency in your
                        branding elements, such as logos, colors, and fonts.</p>
                    <p><span className='class'>YouTube Video
                        SEO:</span></p>
                    <p>Optimize your YouTube videos for better search engine visibility
                        using various techniques, including optimizing titles,
                        descriptions, timestamps, tags, categories, playlists,
                        thumbnails, and adding SRT files for subtitles.</p>
                    <p><span className='class'>Types of YouTube
                        Videos:</span></p>
                    <p>Explore different types of YouTube videos that can help you
                        achieve your marketing goals, such as testimonials,
                        product/service demonstrations, explainer/tutorials, expert
                        interviews, project reviews, case studies, YouTube live videos,
                        video blogs, and event videos.</p>
                    <p><span className='class'>YouTube Video Script
                        Writing to Video Making and Publishing:</span></p>
                    <p>Learn how to create compelling video scripts and effectively
                        produce and publish your videos on YouTube.</p>
                    <p><span className='class'>Market Your YouTube
                        Channel Organically:</span></p>
                    <p>Discover organic marketing strategies to promote your YouTube
                        channel and grow your audience without relying solely on paid
                        promotions.</p>
                    <p><span className='class'>Cross-Promote with Other
                        Channels:</span></p>
                    <p>Collaborate with other YouTube channels to cross-promote your
                        content and reach new audiences.</p>
                    <p><span className='class'>YouTube
                        Analytics:</span></p>
                    <p>Utilize YouTube Analytics to gain insights into your video
                        performance, audience demographics, and engagement metrics,
                        helping you make data-driven decisions for your marketing
                        efforts.</p>
                    <p><span className='class'>Tools:</span></p>
                    <p>Explore various tools such as Keepvid, Loom, VidTao, and others
                        to enhance your YouTube marketing capabilities and streamline
                        your video creation process.</p>
                </div>
            )
        },
        {
            title: "Module 10: Email Marketing &amp; Webchat (Chatbot)",
            content: (
                <div className='Di-content'>
                    <p><span className='class'><strong>Email
                        Marketing:</strong></span></p>
                    <p>Learn how Email Marketing works and identify the appropriate
                        times to use it for effective communication. Discover the
                        Benefits of Email Marketing, such as increased engagement,
                        customer retention, and lead generation. Explore different Types
                        of Email Marketing Campaigns, including promotional,
                        transactional, and drip campaigns. Understand Email Etiquettes
                        to ensure successful email communication. Utilize Bulk Email
                        Marketing Tools to streamline and automate your email campaigns.
                        Create an Email Marketing Content Strategy to deliver relevant
                        and engaging content to your subscribers. Build and manage your
                        Email Marketing List to maintain a healthy and engaged audience.
                        Learn how to create and execute Email Campaigns, including email
                        personalization and scheduling. Analyze and evaluate Email
                        Campaign Reports to optimize your future email marketing
                        efforts.</p>
                    <p><span className='class'><strong>Project: Create
                        an Email Template and Send Your First Email with
                        Mailchimp:</strong></span></p>
                    <p>Engage in a hands-on project to design an eye-catching Email
                        Template using Mailchimp and send your first email campaign to
                        experience the practical aspect of Email Marketing.</p>
                    <p><span
                        className='class'><strong>Chatbot:</strong></span>
                    </p>
                    <p>Learn how to start with Chatbot and implement Zopim Chatbot for
                        effective customer interactions. Discover how Chatbots can be
                        utilized for lead generation and track their performance using
                        Google Analytics. Build conversational flows through Webchat and
                        set up Triggers to engage users proactively. Analyze Webchat
                        interactions to gain valuable insights for continuous
                        improvement.</p>
                </div>
            )
        },
        {
            title: "Module 11: Affiliate Marketing",
            content: (
                <div className='Di-content'>
                    <p><span className='class'><strong>Affiliate Marketing:</strong></span>
                        Affiliate Marketing is a performance-based strategy where affiliates promote products of
                        other companies, earning a commission for each sale or action. Get started by choosing a
                        niche, researching programs, signing up as an affiliate, promoting products, and earning
                        commissions.</p>
                    <p><span className='class'><strong>Commission Structures &amp;
                        Types:</strong></span> Commission structures vary, with fixed or
                        percentage-based earnings per sale or lead. There are Pay Per Sale (PPS), Pay Per Lead
                        (PPL), and Pay Per Click (PPC) programs. Utilize affiliate networks to access multiple
                        programs conveniently.</p>
                    <p><span className='class'><strong>Affiliate Marketing Strategies:</strong>
                    </span>Avoid common mistakes like promoting irrelevant products or unethical tactics.
                        Focus on building trust with your audience and providing value. Use tracking algorithms
                        like cookies to attribute sales correctly.</p>
                    <p><span className='class'><strong>Getting Started:</strong></span> Begin
                        with a platform for promotion, quality content, niche understanding, and effective
                        marketing. Join reputable programs and networks for essential resources and support.</p>
                </div>
            )
        },
        {
            title: "Module 12: Influencer Marketing",
            content: (
                <div className='Di-content'>
                    <p><span className='class'><strong>Influencer Marketing:</strong></span>
                    </p>
                    <p>Influencer Marketing is a strategy that leverages the influence and popularity of social
                        media influencers to promote products or services to their followers. It involves
                        collaborating with influencers to reach a targeted audience authentically.</p>
                    <p><span className='class'><strong>Developing an Influencer Marketing
                        Strategy:</strong></span></p>
                    <p>To develop an effective Influencer Marketing strategy, define your campaign goals, target
                        audience, budget, and metrics for success. Identify suitable social media platforms and
                        types of influencers that align with your brand values and objectives.</p>
                    <p><span className='class'><strong>Finding the Right Influencer for Your
                        Business:</strong></span></p>
                    <p>Conduct thorough research to find influencers who resonate with your niche and have a
                        genuine and engaged following. Consider factors such as relevance, reach, engagement
                        rate, and past brand collaborations.</p>
                    <p><span className='class'><strong>Creating Impressive Content for
                        Influencers to Publish:</strong></span></p>
                    <p>Collaborate with influencers to create compelling and authentic content that aligns with
                        their unique style and audience preferences. Empower influencers to showcase your brand
                        organically while maintaining their authenticity.</p>
                </div>
            )
        },
        {
            title: "Module 13: ORM – Online Brand Reputation Management",
            content: (
                <div className='Di-content'>
                    <p><span className='class'><strong>The Customer
                        Feedback Loop:</strong></span></p>
                    <p>The Customer Feedback Loop involves gathering and analyzing
                        customer feedback to improve products, services, and overall
                        customer experience.</p>
                    <p><span className='class'><strong>Nature of
                        Comments:</strong></span></p>
                    <p>Customer feedback can be categorized into different types, such
                        as transactional (related to specific interactions), complaints,
                        compliments, feature requests, claims, referrals, and
                        engagement-related feedback.</p>
                    <p><span className='class'><strong>Categorizing
                        Customer Feedback:</strong></span></p>
                    <p>Organize customer feedback into relevant categories to better
                        understand patterns and prioritize areas for improvement.</p>
                    <p><span className='class'><strong>Acting On
                        Customer Feedback:</strong></span></p>
                    <p>Take prompt and constructive actions based on customer feedback
                        to address issues, enhance customer satisfaction, and build
                        loyalty.</p>
                    <p><span className='class'><strong>Responding to
                        Crisis &amp; Damaging Situations - Best
                        Practices:</strong></span></p>
                    <p>In times of crisis or negative feedback, respond promptly,
                        transparently, and empathetically. Provide solutions and open
                        channels for further communication to regain trust and loyalty.
                    </p>
                    <p><span className='class'><strong>Moment Marketing
                        meets ORM</strong> </span>- Turning Problems to
                        Opportunities:</p>
                    <p>Leverage moment marketing and Online Reputation Management (ORM)
                        strategies to transform negative feedback into opportunities for
                        showcasing exceptional customer service and resolving issues
                        effectively.</p>
                </div>
            )
        },
        {
            title: "Module 14: Media Planning &amp; Buying",
            content: (
                <div className='Di-content'>
                    <p><span className='class'><strong>Online &amp;
                        Offline Media:</strong></span></p>
                    <p>Understand the dynamics of both online and offline media channels
                        to create a comprehensive marketing strategy.</p>
                    <p><span className='class'><strong>Market Research
                        &amp; Understanding Consumer Behavior:</strong></span>
                    </p>
                    <p>Conduct thorough market research to gain insights into your
                        target audience's preferences, behaviors, and buying habits.</p>
                    <p><span className='class'><strong>Media Mix &amp;
                        Media Planning:</strong></span></p>
                    <p>Develop a balanced media mix to reach your audience through
                        various channels. Plan media campaigns strategically to maximize
                        impact and ROI.</p>
                    <p><span className='class'><strong>Measurement of
                        Media Audience:</strong></span></p>
                    <p>Utilize audience measurement tools to track and analyze the
                        effectiveness of your media campaigns and audience reach.</p>
                </div>
            )
        },
        {
            title: "Module 15: Mobile Marketing",
            content: (
                <div className='Di-content'>
                    <p><span className='class'><strong>Introduction to
                        Mobile Marketing:</strong></span></p>
                    <p>Mobile Marketing refers to promotional activities targeted at
                        mobile device users. With the growing use of smartphones and
                        tablets, mobile marketing has become a vital component of
                        digital marketing</p>
                    <p><span className='class'><strong>Mobile App for
                        Push Notifications &amp; In-App
                        Notifications:</strong></span></p>
                    <p>Mobile apps enable businesses to send push notifications, which
                        serve as direct communication with users. In-app notifications
                        engage app users while they are actively using the app.</p>
                    <p><span className='class'><strong>App Building
                        &amp; Monetization:</strong></span></p>
                    <p>Developing a mobile app involves planning, designing, and coding.
                        Monetization strategies such as in-app purchases, ads, and
                        subscriptions help generate revenue from the app.</p>
                    <p><span className='class'><strong>Listing App on
                        App Stores:</strong></span></p>
                    <p>Publishing the app on app stores like Google Play Store and Apple
                        App Store makes it accessible to a broader audience and enhances
                        discoverability.</p>
                    <p>strategies.</p>
                </div>
            )
        },
        {
            title: "Module 16: Emerging Technology In Digital Marketing(AI)",
            content: (
                <div className='Di-content'>
                    <p><span className='class'><strong>Walkthrough of
                        MarTech:</strong></span></p>
                    <p>MarTech, short for Marketing Technology, encompasses various
                        tools and software that help marketers automate, manage, and
                        analyze marketing activities. It includes solutions for social
                        media marketing, email marketing, content management, analytics,
                        and more, enhancing overall marketing efficiency and
                        effectiveness.</p>
                    <p><span className='class'><strong>Role of AI in
                        the Future of Digital Marketing:</strong></span></p>
                    <p>Artificial Intelligence (AI) is reshaping digital marketing,
                        enabling advanced data analysis, personalized content
                        recommendations, chatbots for customer support, and predictive
                        analytics for targeted campaigns.</p>
                    <p><span className='class'><strong>Scope of AI
                        &amp; ML in Digital Marketing:</strong></span></p>
                    <p>The scope of AI and Machine Learning (ML) in digital marketing is
                        vast. AI-driven chatbots, sentiment analysis, customer
                        segmentation, and predictive modeling offer marketers innovative
                        ways to understand and engage with their audiences.</p>
                </div>
            )
        },
        {
            title: "Capstone Project: Brand Audit &amp; Optimization",
            content: (
                <div className='Di-content'>
                    <p><span className='class'><strong>Digital Audit of
                        5+ Brands in a Chosen Industry.</strong> </span>Creation
                        of Report and Digital Marketing Optimization Strategy.</p>
                    <p><span className='class'><strong>Project
                        Description:</strong></span></p>
                    <p>In this optional project, the focus is on conducting a
                        comprehensive digital audit of 5 or more brands within a
                        selected industry. The aim is to evaluate their current digital
                        marketing efforts and identify areas for improvement. The
                        project duration is 20 days.</p>
                    <p><span className='class'><strong>Step 1: Industry
                        Selection</strong></span></p>
                    <p>Choose one industry from the following 9 options:</p>
                    <ol>
                        <li>E-commerce &amp; Retail</li>
                        <li>Health &amp; Wellness</li>
                        <li>Technology &amp; Gadgets</li>
                        <li>Food &amp; Beverage</li>
                        <li>Travel &amp; Hospitality</li>
                        <li>Fashion &amp; Apparel</li>
                        <li>Financial Services</li>
                        <li>Entertainment &amp; Media</li>
                        <li>Education &amp; E-learning</li>
                    </ol>
                    <p><span className='class'><strong>Step 2: Digital
                        Audit</strong></span></p>
                    <p>Thoroughly analyze the digital presence of the selected brands
                        within the chosen industry. The audit should encompass various
                        aspects, including but not limited to:</p>
                    <ul>
                        <li>Website Analysis: Evaluate website design, user experience,
                            and mobile-friendliness.</li>
                        <li>Social Media Evaluation: Assess social media channels,
                            content strategy, engagement, and follower demographics.
                        </li>
                        <li>Search Engine Visibility: Analyze SEO performance and
                            keyword rankings.</li>
                        <li>Content Marketing: Review content quality, relevancy, and
                            distribution channels.</li>
                        <li>Email Marketing: Evaluate email campaigns, list
                            segmentation, and open/click-through rates.</li>
                        <li>Paid Advertising: Assess PPC campaigns, ad creatives, and
                            targeting strategies.</li>
                        <li>Analytics &amp; Metrics: Measure key performance indicators
                            (KPIs) and data analysis.</li>
                    </ul>
                    <p><span className='class'><strong>Step 3: Report
                        Creation</strong></span></p>
                    <p>Compile all findings from the digital audit into a detailed
                        report for each brand. The report should highlight strengths,
                        weaknesses, opportunities, and threats in their digital
                        marketing efforts. Provide data-backed insights and actionable
                        recommendations.</p>
                    <p><span className='class'><strong>Step 4: Digital
                        Marketing Optimization Strategy</strong></span></p>
                    <p>Based on the audit report, develop a comprehensive digital
                        marketing optimization strategy for each brand. Tailor the
                        strategy to address their unique goals and challenges. Include a
                        timeline for implementation and expected outcomes.</p>
                    <p><span className='class'><strong>Step 5:
                        Presentation</strong></span></p>
                    <p>Present the audit findings, optimization strategy, and
                        recommendations to stakeholders for each brand. Engage in
                        discussions and address any queries to ensure clarity and
                        alignment.</p>
                </div>
            )
        },
    ];
    return (
        <>
            <section id='Full-head'>
                <div className="head-main" style={{ position: 'relative', overflow: 'hidden', height: '75vh' }}>
                    <div
                        className="background-overlay"
                        style={{
                            backgroundImage: `url(${image})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            filter: 'brightness(30%)', // Adjusts visibility
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            zIndex: -1
                        }}
                    ></div>
                    <div className='Full-content'>
                        <h6>Marketing Courses</h6>
                        <h1>Empower Your Career in Digital Marketing: Unlock Your Potential</h1>
                        <p>At Destination Technologies, our Digital Marketing program is designed to equip you with the skills and knowledge to excel in the field of digital marketing. With a comprehensive curriculum and hands-on training, we prepare you for a successful career by providing career-focused education and placement support. Join us on this transformative learning journey and unleash your potential in the dynamic world of digital marketing.</p>
                        <a> <EButton color='#F26B23' /></a>
                    </div>
                </div>
            </section>
            <hr />
            <section id='Course-details'>
                <div className='course-main'>
                    <div className='course-sub' >
                        <div>
                            <img src={logo1}></img>
                        </div>
                        <div>
                            <h2>Digital Marketing Course + Internship</h2>
                            <h4>15+ Modules</h4>
                        </div>
                    </div>
                    <div className='course-sub'>
                        <div>
                            <img src={logo2}></img>
                        </div>
                        <div>
                            <h2>Duration</h2>
                            <h4>3 Months</h4>
                        </div>
                    </div>
                    <div className='course-sub'>
                        <div>
                            <img src={logo3}></img>
                        </div>
                        <div>
                            <h2>Get 6+ Certification</h2>
                            <h4>From Google & Destination Technology</h4>
                        </div>
                    </div>
                    <div className='course-sub'>
                        <div>
                            <img src={logo4}></img>
                        </div>
                        <div>
                            <h2>Placement Support</h2>
                            <h4>From our Recruitment Partner</h4>
                        </div>
                    </div>
                </div>
                <div className='Full-course-text' style={{ width: '80%', textAlign: 'center' }}>
                    <h2>Each module provides in-depth knowledge and practical skills to equip you with the expertise needed to excel in the field of digital marketing.</h2>
                </div>
                <Digital_Card />
            </section>
            <hr />
            {/* placement */}
            <section id="ImageCarousel">
                <hr />
                <h2>Destination Techs: Empowering Success through Upskilling</h2>
                <hr />
                <h1>Student Placements</h1>
                <ImageCarousel />
            </section >
            <hr />
            <section id="Digital_About">
                <div className='Digital_About-p'>
                    <h2>About the Program</h2>
                    <p>Embark on a transformative journey with our comprehensive Digital Marketing course, meticulously designed to empower you with the skills and knowledge needed to excel in the dynamic world of digital marketing. Led by industry experts and seasoned practitioners, our cutting-edge curriculum ensures that you stay ahead of the curve in this ever-evolving field.</p>

                    <p>Experience immersive and hands-on learning through real-world projects, allowing you to apply theoretical concepts to practical scenarios. Under the guidance of our accomplished mentors, you will develop a deep understanding of digital marketing strategies, tools, and techniques that drive impactful results.</p>

                    <p>In today's digital landscape, effective marketing is essential for businesses to thrive. Our intensive 3-month course provides you with the practical experience and expert guidance necessary to thrive in the digital marketing domain. From mastering search engine optimization and social media marketing to harnessing the power of data analytics and crafting compelling content, you will gain the expertise required to accelerate your career growth.</p>
                    <h3>Join us at Destination Technologies and unlock a world of opportunities in the ever-expanding realm of digital marketing</h3>
                    <a> <Button text="Enroll For Digital Marketing Course" /></a>
                </div>
                <div className='Digital_About_img'>
                    <img src={image2}></img>
                    <img src={image3}></img>
                </div>
            </section>
            <hr />
            <section id="Syllabus-f">
                <div className='Syllabus-main'>
                    <div className='Syllabus-sub-h'>
                        <h2>Download Digital Marketing Syllabus: Unveil Your Learning Journey</h2>
                        <p style={{ fontSize: '1.5em' }}>Get a comprehensive overview of our Digital Marketing program by downloading the detailed syllabus.</p>
                    </div>
                    <div className='Syllabus-sub'>
                        <a href='#'><Button text="Download The Syllabus" /></a>
                    </div>
                </div>
            </section>
            <hr />
            <section id="tools">
                <h2>Digital Marketing Tools you will Master :</h2>
                <img src={image4} />
            </section>
            <hr />
            <section id="Digital-Syllabus" style={{ height: 'auto' }}>
                <h2>Digital Marketing Syllabus</h2>
                <p>This digital marketing syllabus covers essential concepts, tools, and strategies for marketing businesses effectively. The syllabus is organized into 16 modules, each focusing on a specific aspect of digital marketing. Each module includes a brief introduction, an overview of the topic, and a series of exercises to help you practice and solidify your knowledge.</p>
                <Digital_S accordionData={accordionData} />
                <hr />
            </section>
            <hr />
            <section id="Digital-Benifits">
                <h2>Unlock the Benefits of Learning with Destination Technologies</h2>
                <div className='Digital-Benifits-main'>
                    <div className="first-row">
                        <img src={logo5} />
                        <div className='text'>
                            <h3>Strong Hand-Holding:</h3>
                            <p> Experience dedicated support and guidance throughout your learning journey. Our team is committed to providing you with the assistance you need to succeed in the program.</p>
                        </div>
                    </div>
                    <div className="first-row">
                        <img src={logo6} />
                        <div className='text'>
                            <h3>Learning Support:</h3>
                            <p> Access comprehensive learning resources, including recorded lectures, live sessions, quizzes, assignments, and interactive learning materials. Stay engaged and make the most of your learning experience.</p>
                        </div>
                    </div>
                    <div className="first-row">
                        <img src={logo7} />
                        <div className='text'>
                            <h3>Career Assistance:</h3>
                            <p> Benefit from our career assistance services, which include resume building, interview preparation, and job placement support. We strive to equip you with the skills and resources needed to excel in your career as a Full Stack Web Developer.</p>
                        </div>
                    </div>
                </div>
                <div className='Digital-Benifits-sub'>
                    <div className="secound-row">
                        <img src={logo8} />
                        <div className='text'>
                            <h3>Job Opportunities: </h3>
                            <p> Destination Technologies opens doors to a wide range of job opportunities in the field of Full Stack Web Development. Our program equips you with the skills and knowledge sought after by employers, empowering you to secure rewarding positions in the industry.</p>
                        </div>
                    </div>
                    <div className="secound-row">
                        <img src={logo9} />
                        <div className='text'>
                            <h3>Networking:</h3>
                            <p> Connect with a diverse community of learners, instructors, industry professionals, and alumni. Take advantage of networking opportunities, collaborate on projects, and build valuable connections that can accelerate your career growth in the field of Full Stack Web Development.</p>
                        </div>
                    </div>
                </div>
                <a style={{ marginTop: '40px' }}> <Button text="Enroll For Digital Marketing Course" /></a>
            </section>
            <hr />
            <section id="Digital-Question">
                <img src={logo10} className="di-image" data-animate="di-im" />
                <div >
                    <h2 className="di-heading" data-animate="di-h" >Frequently Asked Questions</h2>
                    <div data-animate="di-div" className="Di-Question">
                        <Digital_S accordionData={data} />
                    </div>
                </div>
            </section>
        </>
    )
}
