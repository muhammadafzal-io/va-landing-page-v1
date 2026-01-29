import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-white font-sans">
      <Header />

      <section className="py-16 sm:py-20 md:py-24">
        <div className="max-w-5xl mx-auto px-6 md:px-10">
          <div className="space-y-4 ">
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-primary text-center">
              TERMS AND CONDITIONS
            </h1>
            <p className="text-sm sm:text-base text-foreground/70">
              Middle East Advisory Group L.L.C
            </p>
            <p className="text-xs sm:text-sm text-foreground/60">
              Last Updated: 19th of January, 2026
            </p>
          </div>

          <div className="mt-12 space-y-8 text-sm sm:text-base text-foreground/80 leading-relaxed">
            <p>
              These Terms and Conditions ("<strong>Terms</strong>") govern (i) your access to and
              use of the website at{" "}
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 underline"
                    href="https://me-advisorygroup.com"
                  >
                    https://me-advisorygroup.com 
                  </a>{" "} (the "<strong>Website</strong>"),
              and (ii) where applicable, your engagement of professional and
              administrative services from<strong> MIDDLE EAST ADVISORY GROUP L.L.C ("ME
              Advisory Group", "we", "us", or "our")</strong>.
            </p>
            <p>
              By accessing or using the Website, submitting an enquiry,
              downloading materials, or engaging our services, you confirm that
              you have read, understood, and agree to these Terms. If you do not
              agree, do not use the Website or our services.
            </p>

            <div className="space-y-4">
              <h2 className="font-serif text-xl sm:text-2xl text-primary font-semibold">
                1. ABOUT US AND COMPANY DETAILS
              </h2>
              <ul className="list-disc pl-10 space-y-2">
                <li>1.1 <strong>Legal Entity:</strong> MIDDLE EAST ADVISORY GROUP L.L.C</li>
                <li>
                  1.2 <strong>Jurisdiction / Registration:</strong> Dubai Economy and Tourism
                  (DET), United Arab Emirates
                </li>
                <li>
                  1.3 <strong>Registered Office:</strong> Court 2204, Business Bay, Dubai, United
                  Arab Emirates
                </li>
                <li>
                  1.4 <strong>Contact:</strong>
                  <div>Email: <strong>info@me-advisorygroup.com</strong></div>
                  <div>
                    Address:<strong> Boulevard Plaza, Tower 1, Level 9, Sheikh Mohammed
                    Bin Rashid Boulevard, Dubai, United Arab Emirates</strong>
                  </div>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className="font-serif text-xl sm:text-2xl text-primary font-semibold">
                2. DEFINITIONS
              </h2>
              <p>In these Terms, unless the context requires otherwise:</p>
              <ul className="list-disc pl-10 space-y-2">
                <li>
                  <strong>"Client"</strong> means any individual or entity that engages or seeks
                  to engage our Services.
                </li>
                <li>
                  <strong>"Deliverables"</strong> means any reports, templates, summaries,
                  letters, submissions, or other work product we provide as part
                  of an engagement.
                </li>
                <li>
                  <strong>"Engagement Documentation"</strong> means any letter of engagement,
                  scope of work, proposal, statement of work, service order,
                  invoice, email confirmation of scope, or similar written
                  agreement governing Services.
                </li>
                <li>
                  <strong>"Fees"</strong> means our professional fees and charges for Services,
                  excluding Third-Party Costs unless stated otherwise.
                </li>
                <li>
                  <strong>"Services"</strong> means advisory, coordination, administrative,
                  concierge, and related services described on the Website or
                  agreed in Engagement Documentation.
                </li>
                <li>
                  <strong>"Third-Party Costs"</strong> means any fees, charges, levies, penalties,
                  disbursements, or costs charged by third parties (including
                  government entities, regulators, banks, free zone authorities,
                  landlords, developers, typing centres, medical centres,
                  translators, or other providers).
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className="font-serif text-xl sm:text-2xl text-primary font-semibold">
                3. WEBSITE USE, AVAILABILITY, AND ACCEPTABLE CONDUCT
              </h2>
              <p>
                3.1 <strong>Permitted Use.</strong> You may use the Website for lawful purposes
                only, including to learn about our Services and contact us.
              </p>
              <div>
                <p>3.2 <strong>Prohibited Conduct.</strong> You must not:</p>
                <ul className="list-disc pl-10 space-y-2">
                  <li>
                    Misuse the Website, introduce malware, attempt unauthorised
                    access, scrape content, or disrupt availability;
                  </li>
                  <li>
                    Use the Website in a way that violates any applicable law or
                    regulation;
                  </li>
                  <li>Submit false, misleading, or unlawful information;</li>
                  <li>
                    Infringe our intellectual property rights or those of any
                    third party.
                  </li>
                </ul>
              </div>
              <p>
                3.3 <strong>No Warranty for Website.</strong> The Website is provided on an "as
                is" and "as available" basis. We do not warrant uninterrupted
                operation, accuracy, completeness, or that the Website will be
                free from errors or harmful components.
              </p>
              <p>
                3.4 <strong>Suspension.</strong> We may suspend or restrict access to the Website
                (in whole or part) for maintenance, security, legal compliance,
                or operational reasons without liability.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="font-serif text-xl sm:text-2xl text-primary font-semibold">
                4. INFORMATION ON THE WEBSITE AND NO PROFESSIONAL ADVICE
              </h2>
              <p>
                4.1 <strong>General Information Only.</strong> Content on the Website is provided
                for general informational purposes and does not constitute
                legal advice, tax advice, regulated financial advice, investment
                advice, or immigration advice.
              </p>
              <p>
                4.2 <strong>No Reliance.</strong> You should not rely on Website content as a
                substitute for obtaining advice tailored to your circumstances
                from appropriately licensed professionals. We may coordinate
                with external counsel, tax advisors, auditors, or other
                specialists where required.
              </p>
              <p>
                4.3 <strong>No Client Relationship by Website Use.</strong> Accessing the Website
                or submitting an enquiry does not create a client relationship.
                A binding engagement exists only when we confirm scope and
                acceptance in writing (including via Engagement Documentation
                and/or invoice acceptance), and any required onboarding and
                compliance checks are completed.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="font-serif text-xl sm:text-2xl text-primary font-semibold">
                5. SCOPE OF SERVICES AND ENGAGEMENT PROCESS
              </h2>
              <div>
                <p>5.1 <strong>Typical Services.</strong> We provide paid advisory and administrative services which may include:</p>
                <ul className="list-disc pl-10 space-y-2">
                  <li>UAE residency and relocation coordination</li>
                  <li>Corporate structuring and company formation coordination</li>
                  <li>Tax residency coordination and international tax liaison</li>
                  <li>Real estate advisory, onboarding, and transaction coordination</li>
                  <li>Family governance and strategic wealth advisory (non-regulated, non-investment)</li>
                  <li>Concierge and private office support</li>
                  <li>Correspondence, document handling, and administrative support</li>
                </ul>
              </div>
              <p>
                5.2 <strong>Scope Controlled by Engagement Documentation.</strong> The exact
                scope, deliverables, assumptions, timelines, and Fees are as set
                out in the Engagement Documentation. If there is any conflict
                between the Website and Engagement Documentation, the Engagement
                Documentation prevails for that engagement.
              </p>
              <p>
                5.3 <strong>Change Requests.</strong> If scope changes, we may revise Fees,
                timelines, and deliverables. Changes must be confirmed in
                writing.
              </p>
              <p>
                5.4 <strong>Third-Party Dependency.</strong> Many outcomes depend on third
                parties (including government entities, regulators, banks,
                landlords, developers, and other providers). We may assist with
                coordination, but we do not control their processes, timelines,
                or decisions.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="font-serif text-xl sm:text-2xl text-primary font-semibold">
                6. FEES, BILLING, THIRD-PARTY COSTS, AND TAXES
              </h2>
              <p>
                6.1 <strong>Fees Are Payable Unless Expressly Agreed Otherwise.</strong> Our
                Services are provided on a paid basis unless we expressly
                confirm otherwise in writing.
              </p>
              <div>
                <p>6.2 <strong>Third-Party Costs.</strong></p>
                <ul className="list-disc pl-10 space-y-2">
                  <li>Third-Party Costs are typically payable by the Client in addition to our Fees.</li>
                  <li>We may require advance deposits to cover Third-Party Costs.</li>
                  <li>
                    Where we pay Third-Party Costs on your behalf, you must reimburse us immediately upon invoice.
                  </li>
                </ul>
              </div>
              <p>
                6.3 <strong>Payment Terms.</strong> Payment timelines and methods will be stated
                in the Engagement Documentation and/or invoice. Late payments
                may result in paused work, withheld deliverables, or termination.
              </p>
              <p>
                6.4 <strong>Price Changes.</strong> Fees may change over time. Any change for an
                existing engagement applies only if communicated and agreed (or
                as permitted by Engagement Documentation).
              </p>
              <p>
                6.5 <strong>Taxes.</strong> Fees may be subject to VAT or other applicable taxes
                as required by UAE law. You are responsible for any bank charges,
                FX charges, or withholding taxes unless agreed otherwise.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="font-serif text-xl sm:text-2xl text-primary font-semibold">
                7. REFUNDS, CANCELLATIONS, AND SUSPENSION OF SERVICES
              </h2>
              <p>
                7.1 <strong>General No-Refund Position.</strong> Unless otherwise stated in
                Engagement Documentation, Fees are non-refundable once work has
                commenced, resources have been allocated, advice has been
                provided, documents have been prepared/submitted, or third-party
                processes have started.
              </p>
              <p>
                7.2 <strong>Government and Third-Party Fees.</strong> Government fees and
                Third-Party Costs are non-refundable unless the third party
                refunds them, and any refund is subject to that third party's
                rules.
              </p>
              <p>
                7.3 <strong>Client-Initiated Pause/Delay.</strong> If you delay providing
                information or documents, we may (i) pause work, (ii) adjust
                timelines, (iii) apply reactivation or additional administration
                fees, and/or (iv) terminate the engagement if delays are
                material.
              </p>
              <p>
                7.4 <strong>Suspension.</strong> We may suspend Services where: invoices are
                overdue; required KYC/AML information is not provided; we
                identify legal, sanctions, or reputational risk; we reasonably
                suspect fraud, misrepresentation, or unlawful activity.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="font-serif text-xl sm:text-2xl text-primary font-semibold">
                8. CLIENT OBLIGATIONS AND REPRESENTATIONS
              </h2>
              <div>
                <p>8.1 You agree to:</p>
                <ul className="list-disc pl-10 space-y-2">
                  <li>Provide accurate, complete, and up-to-date information and documents;</li>
                  <li>Respond promptly to requests and meet deadlines;</li>
                  <li>Ensure you have authority to provide information for any entity you represent;</li>
                  <li>
                    Comply with all laws applicable to you, including UAE laws
                    and the laws of your home jurisdiction where relevant;
                  </li>
                  <li>Use Services only for lawful purposes.</li>
                </ul>
              </div>
              <p>
                8.2 <strong>Accuracy and Misrepresentation.</strong> You acknowledge that
                outcomes may be affected by incomplete or inaccurate information.
                We are not responsible for delays, refusals, penalties, or
                adverse outcomes resulting from your acts, omissions, or
                misstatements.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="font-serif text-xl sm:text-2xl text-primary font-semibold">
                9. KYC / AML / SANCTIONS / COMPLIANCE
              </h2>
              <p>
                9.1 We comply with UAE anti-money laundering and
                counter-terrorist financing requirements, sanctions screening,
                and related compliance obligations.
              </p>
              <div>
                <p>9.2 We may request (without limitation):</p>
                <ul className="list-disc pl-10 space-y-2">
                  <li>Identification documents, corporate documents, beneficial ownership information;</li>
                  <li>Source of funds/source of wealth evidence;</li>
                  <li>Banking and tax residency information;</li>
                  <li>Explanations of transaction purpose and business activities.</li>
                </ul>
              </div>
              <p>
                9.3 We may refuse, pause, or terminate Services if compliance
                requirements are not met or if we determine (in our reasonable
                discretion) that continuing would pose legal or compliance risk.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="font-serif text-xl sm:text-2xl text-primary font-semibold">
                10. NO GUARANTEE OF OUTCOMES
              </h2>
              <p>
                10.1 We will perform Services with reasonable care and skill
                consistent with professional standards. However, we do not
                guarantee any outcome, including (without limitation) approvals,
                processing times, bank account opening, visa issuance, tax
                residency certificates, authority decisions, property
                transaction completion, or third-party confirmations.
              </p>
              <p>
                10.2 Any timelines provided are estimates only unless expressly
                guaranteed in writing (and we generally do not guarantee
                timelines due to third-party dependencies).
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="font-serif text-xl sm:text-2xl text-primary font-semibold">
                11. INTELLECTUAL PROPERTY AND PERMITTED USE OF DELIVERABLES
              </h2>
              <p>
                11.1 <strong>Website Content.</strong> All Website content, branding, trademarks,
                text, graphics, and layout are owned by or licensed to us and
                are protected by applicable intellectual property laws.
              </p>
              <p>
                11.2 <strong>Deliverables.</strong> Unless agreed otherwise, Deliverables are
                provided for your internal use for the purpose of the engagement
                only. You must not resell, publish, distribute, or commercially
                exploit Deliverables without our written permission.
              </p>
              <p>
                11.3 <strong>No Reverse Engineering.</strong> You must not copy, adapt,
                translate, decompile, or create derivative works from our
                proprietary materials except as permitted by law.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="font-serif text-xl sm:text-2xl text-primary font-semibold">
                12. CONFIDENTIALITY
              </h2>
              <p>
                12.1 We will treat non-public client information as confidential
                and use it only for purposes of providing Services, complying
                with law, and protecting our legitimate interests.
              </p>
              <p>
                12.2 Confidentiality does not apply to information that is:
              </p>
              <ul className="list-disc pl-10 space-y-2">
                <li>Public through no breach by us;</li>
                <li>Lawfully obtained from a third party;</li>
                <li>Required to be disclosed by law, court order, regulator, or for compliance purposes.</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className="font-serif text-xl sm:text-2xl text-primary font-semibold">
                13. DATA PROTECTION AND PRIVACY
              </h2>
              <p>
                13.1 Personal data and business data provided to us will be
                processed in accordance with our Privacy Policy (as published
                on the Website) and applicable UAE data protection laws.
              </p>
              <p>
                13.2 You acknowledge that providing Services may require sharing
                data with third parties (for example, government entities,
                banks, free zones, medical centres, typing centres, couriers, or
                external advisors) where necessary to perform the engagement.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="font-serif text-xl sm:text-2xl text-primary font-semibold">
                14. THIRD-PARTY SERVICES, LINKS, AND DISCLAIMERS
              </h2>
              <p>
                14.1 The Website may contain links to third-party websites. We do
                not control them and are not responsible for their content,
                privacy practices, or availability.
              </p>
              <p>
                14.2 Where we introduce or coordinate third-party providers,
                they may have their own terms. Unless expressly agreed otherwise
                in writing, we do not act as their agent and are not liable for
                their acts or omissions.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="font-serif text-xl sm:text-2xl text-primary font-semibold">
                15. LIMITATION OF LIABILITY
              </h2>
              <div>
                <p>15.1 <strong>Exclusions.</strong> To the maximum extent permitted by law, we are not liable for:</p>
                <ul className="list-disc pl-10 space-y-2">
                  <li>Indirect, incidental, special, or consequential losses;</li>
                  <li>Loss of profit, revenue, business, goodwill, reputation, or opportunity;</li>
                  <li>Delays or failures caused by third parties or events outside our reasonable control;</li>
                  <li>Decisions by authorities, regulators, banks, landlords, developers, or any other third party.</li>
                </ul>
              </div>
              <p>
                15.2 <strong>Liability Cap.</strong> To the maximum extent permitted by law, our
                total aggregate liability arising out of or in connection with
                an engagement (whether in contract, tort, negligence, or
                otherwise) is limited to the total professional Fees actually
                paid to us for the specific engagement giving rise to the claim.
              </p>
              <p>
                15.3 <strong> Time Limit for Claims.</strong> Any claim must be brought within
                twelve (12) months of the date you became aware (or should
                reasonably have become aware) of the event giving rise to the
                claim, to the extent permitted by law.
              </p>
              <p>
                15.4 Nothing in these Terms limits liability that cannot be
                excluded under applicable law (for example, liability for
                fraud).
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="font-serif text-xl sm:text-2xl text-primary font-semibold">
                16. CLIENT INDEMNITY
              </h2>
              <p>
                You agree to indemnify and hold harmless ME Advisory Group, its
                partners, directors, employees, and contractors from and against
                any losses, claims, liabilities, penalties, and expenses
                (including reasonable legal fees) arising from:
              </p>
              <ul className="list-disc pl-10 space-y-2">
                <li>Your breach of these Terms or Engagement Documentation;</li>
                <li>False, misleading, or incomplete information provided by you;</li>
                <li>Unlawful use of Services;</li>
                <li>
                  Your instructions that cause us to interact with third parties
                  based on inaccurate information;
                </li>
                <li>Except to the extent caused by our proven wilful misconduct or fraud.</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className="font-serif text-xl sm:text-2xl text-primary font-semibold">
                17. COMMUNICATIONS, ELECTRONIC ACCEPTANCE, AND RECORDS
              </h2>
              <p>
                17.1 You consent to communications by email, phone, messaging
                platforms (including WhatsApp), and other electronic means.
              </p>
              <p>
                17.2 You agree that electronic acceptance (including email
                confirmations, click-through acceptance, and payment of
                invoices) may form a binding agreement.
              </p>
              <p>
                17.3 We may retain records of communications and documents for
                compliance, operational, and legal purposes.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="font-serif text-xl sm:text-2xl text-primary font-semibold">
                18. FORCE MAJEURE
              </h2>
              <p>
                We are not liable for delays or failure to perform due to events
                beyond our reasonable control, including governmental actions,
                system outages, changes in law or policy, labour disputes,
                strikes, travel restrictions, pandemics, network failures, or
                acts of God.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="font-serif text-xl sm:text-2xl text-primary font-semibold">
                19. TERMINATION
              </h2>
              <p>
                19.1 <strong>By You.</strong> You may request termination in writing. Fees and
                Third-Party Costs incurred up to the termination date remain
                payable.
              </p>
              <p>
                19.2 <strong> By Us.</strong> We may terminate immediately by written notice if:
                you fail to pay on time; you fail to provide KYC/AML
                documentation; we reasonably suspect unlawful, sanctioned, or
                fraudulent activity; you materially breach these Terms or
                Engagement Documentation; continuing would expose us to legal,
                compliance, or reputational risk.
              </p>
              <p>
                19.3 <strong>Effect of Termination.</strong> We may withhold Deliverables until
                all outstanding amounts are paid, where permitted by law and
                consistent with the engagement terms.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="font-serif text-xl sm:text-2xl text-primary font-semibold">
                20. GOVERNING LAW AND JURISDICTION
              </h2>
              <p>
                20.1 These Terms and any dispute or claim arising from them are
                governed by the laws of the <strong>United Arab Emirates</strong>, as applicable
                in the Emirate of Dubai.
              </p>
              <p>
                20.2 The <strong>Dubai Courts</strong> shall have exclusive jurisdiction, unless
                the Engagement Documentation expressly states a different forum
                or dispute resolution mechanism.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="font-serif text-xl sm:text-2xl text-primary font-semibold">
                21. CHANGES TO THESE TERMS
              </h2>
              <p>
                We may update these Terms from time to time by posting the
                revised version on the Website. Continued use of the Website
                after changes are posted constitutes your acceptance of the
                updated Terms.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="font-serif text-xl sm:text-2xl text-primary font-semibold">
                22. GENERAL LEGAL PROVISIONS
              </h2>
              <p>
                22.1 <strong>Severability.</strong> If any provision is held invalid or
                unenforceable, the remaining provisions remain in full force.
              </p>
              <p>
                22.2 <strong>No Waiver.</strong> Failure to enforce any provision is not a waiver
                of that provision.
              </p>
              <p>
                22.3 <strong>Assignment.</strong> You may not assign your rights or obligations
                without our written consent. We may assign or transfer our
                rights and obligations as part of a restructuring or business
                transfer.
              </p>
              <p>
                22.4 <strong>Entire Agreement (Website).</strong> These Terms constitute the
                entire agreement between you and us regarding Website use. For
                Services, the Engagement Documentation governs and will prevail
                where inconsistent.
              </p>
              <p>
                22.5 <strong>Language.</strong> These Terms are drafted in English. If
                translated, the English version prevails to the extent permitted
                by law.
              </p>
              <p>
                22.6 <strong>Notices.</strong> Notices should be sent to info@me-advisorygroup.com
                (or any updated contact we publish on the Website)
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
