import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";

export const metadata = {
  title: "Solutions | Onyitech JournalHub Ltd",
  description:
    "Explore practical research technology, online questionnaire hosting, data collection, manuscript screening, journal development and publishing support from Onyitech JournalHub Ltd.",
  alternates: { canonical: "/solutions" },
  openGraph: { url: "https://www.onyitechub.com/solutions" },
};

const services = [
  {
    number: "01",
    title: "Research Instrument Hosting & Online Data Collection",
    summary:
      "Turn a research questionnaire, survey or structured instrument into an online data-collection workflow. Participants can access the instrument through a shared link, submit responses online and help the researcher build an organised dataset.",
    activities: [
      "Prepare and configure questionnaires and structured research instruments for online use.",
      "Set up participant-facing forms and shareable collection links.",
      "Collect and organise submitted responses in a digital workflow.",
      "Support response monitoring, data review and export where available in the selected setup.",
      "Discuss practical safeguards such as participant information, consent wording and access requirements.",
    ],
    outcome:
      "An online instrument and a more organised route for receiving research responses, with the available features and deliverables agreed before the project begins.",
    audience: "Researchers, postgraduate students, research teams, consultants, universities and organisations conducting surveys or field studies.",
    stage:
      "Instrument and Data Collection capabilities are being introduced in stages. We confirm the available functions, configuration and delivery scope for each project before work begins.",
  },
  {
    number: "02",
    title: "Onyitech Research Workspace",
    summary:
      "A developing digital workspace bringing research activities and practical tools together, from early project planning through data collection, manuscript preparation and research administration.",
    activities: [
      "Support research project organisation and development workflows.",
      "Provide access to a growing set of research modules and tools.",
      "Connect relevant stages of a research workflow where supported.",
      "Help teams identify where a digital process can reduce repetitive manual work.",
    ],
    outcome:
      "A structured digital environment for supported research tasks, with module access and current capabilities explained before onboarding.",
    audience: "Individual researchers, postgraduate students, research groups and institutions.",
    stage:
      "The Workspace is being developed and released in stages. Not all modules or advanced features are necessarily available in every release.",
  },
  {
    number: "03",
    title: "Manuscript Integrity & Citation Screening",
    summary:
      "Review a manuscript before submission to identify structural gaps, citation inconsistencies and reference-list issues that an author or editor may want to correct.",
    activities: [
      "Check document structure and the presence of expected manuscript sections.",
      "Compare in-text citations with entries in the reference list.",
      "Identify citations or references that do not appear to match.",
      "Check available DOI records and article metadata through scholarly services.",
      "Review accessible URLs and flag possible link or metadata problems.",
      "Provide an advisory report of issues for human review.",
    ],
    outcome:
      "A screening report that highlights detected issues and items that may need author or editorial attention.",
    audience: "Researchers, authors, postgraduate students, journal editors and academic publishers.",
    stage:
      "Screening is an advisory technical review. It is not a comprehensive plagiarism-database search, a finding of misconduct, or a guarantee that a manuscript will be accepted.",
  },
  {
    number: "04",
    title: "Academic Journal Development & OJS Support",
    summary:
      "Establish a professional online presence for an academic journal or improve the technology behind an existing publication using Open Journal Systems (OJS) and related publishing infrastructure.",
    activities: [
      "Install, configure and customise OJS journal websites.",
      "Set up journal pages, user roles, submission settings and editorial workflows.",
      "Configure themes and appropriate plugins.",
      "Support journal migration, upgrades, troubleshooting and maintenance.",
      "Improve technical structure and machine-readable journal information.",
    ],
    outcome:
      "A configured journal platform and technical support plan aligned with the journal's publishing workflow.",
    audience: "Journal founders, editorial boards, academic departments, universities and independent publishers.",
    stage:
      "The scope depends on the journal's existing platform, hosting environment, OJS version and required integrations.",
  },
  {
    number: "05",
    title: "DOI & Scholarly Metadata Support",
    summary:
      "Prepare and maintain structured article information so that scholarly publications can be represented accurately in DOI and discovery workflows.",
    activities: [
      "Prepare article metadata such as titles, authors, affiliations, abstracts and references.",
      "Review metadata completeness and consistency.",
      "Support DOI workflow configuration and metadata deposit processes under an appropriate publisher or registration-agency member arrangement.",
      "Assist with metadata corrections and updates when required.",
    ],
    outcome:
      "Better organised scholarly metadata and technical assistance with the applicable DOI workflow.",
    audience: "Academic journals, publishers, editorial teams and research organisations.",
    stage:
      "DOI registration and deposits depend on the journal's publisher arrangements and the relevant registration-agency membership. Onyitech JournalHub does not imply that every client or journal automatically receives a DOI.",
  },
  {
    number: "06",
    title: "International Publishing Support",
    summary:
      "Help authors and research clients understand and coordinate publishing-related requirements with overseas publishers and service providers.",
    activities: [
      "Help clarify publisher invoices and payment instructions.",
      "Coordinate communication and documentation between the client and the relevant publisher or supplier.",
      "Discuss eligible payment arrangements where the payment provider has approved the specific business activity and transaction flow.",
      "Provide administrative follow-up on the publishing-related transaction.",
    ],
    outcome:
      "Clearer coordination of publisher requirements, invoices and the agreed administrative process.",
    audience: "Authors, researchers, research consultants and publishers working across borders.",
    stage:
      "Any payment handling is subject to written approval from the relevant payment provider, genuine supporting documentation and applicable laws. This is not advertised as a money-transfer, remittance or escrow service. We do not guarantee publication or manuscript acceptance.",
  },
  {
    number: "07",
    title: "Research Data, Analysis & Intelligence",
    summary:
      "Support the organisation and interpretation of research data so that teams can move from collected responses and source material to useful findings.",
    activities: [
      "Discuss data structures and workflows before collection begins.",
      "Support data cleaning, organisation and preparation for analysis.",
      "Provide agreed analytical or visual reporting support within the project's scope.",
      "Explore suitable automation and machine-learning approaches where appropriate.",
    ],
    outcome:
      "A clearer, more usable research dataset and agreed analytical outputs, depending on the project's methods and requirements.",
    audience: "Researchers, research consultants, universities, NGOs and organisations undertaking evidence-led projects.",
    stage:
      "Analysis, visualisation and advanced intelligence services are scoped according to the data, methods, tools and capabilities available for the engagement.",
  },
  {
    number: "08",
    title: "Custom Software & Workflow Automation",
    summary:
      "When an off-the-shelf tool does not fit the work, we design and develop software around the organisation's actual process and users.",
    activities: [
      "Build research portals, internal dashboards and web applications.",
      "Develop APIs and integrations between existing systems.",
      "Automate repetitive data-entry, reporting and administrative workflows.",
      "Design databases and digital processes around defined operational needs.",
      "Plan for maintainability, access control and future improvement.",
    ],
    outcome:
      "A scoped software solution, integration or automation workflow with agreed functionality and delivery milestones.",
    audience: "Universities, research centres, publishers, NGOs, businesses and organisations with a defined digital workflow challenge.",
    stage:
      "Custom projects begin with requirements discovery and a written scope. Features, timeline and cost are agreed before development.",
  },
];

export default function SolutionsPage() {
  return (
    <>
      <SiteHeader />
      <main className="detail-page">
        <section className="detail-hero">
          <div className="wrap">
            <p className="eyebrow">SOLUTIONS</p>
            <h1>Practical technology and support for research and scholarly publishing.</h1>
            <p className="detail-lede">
              Whether you need to host a questionnaire online, organise research
              data, screen a manuscript, establish an academic journal or
              automate an organisational workflow, Onyitech JournalHub helps
              you understand the task and choose a workable digital solution.
            </p>
            <p className="detail-lede">
              Explore what each service involves, what you can expect to receive
              and who it is designed to support.
            </p>
          </div>
        </section>

        <section>
          <div className="wrap">
            <div className="section-head">
              <div>
                <p className="eyebrow">WHAT WE CAN HELP YOU DO</p>
                <h2>Services explained in practical terms.</h2>
              </div>
            </div>
            <div className="feature-grid">
              {services.map((service) => (
                <article key={service.number}>
                  <span>{service.number}</span>
                  <h3>{service.title}</h3>
                  <p>{service.summary}</p>
                  <h4>What we do</h4>
                  <ul>
                    {service.activities.map((activity) => (
                      <li key={activity}>{activity}</li>
                    ))}
                  </ul>
                  <p><strong>What you receive:</strong> {service.outcome}</p>
                  <p><strong>Who it is for:</strong> {service.audience}</p>
                  <p className="availability-note"><strong>Scope and availability:</strong> {service.stage}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="paper-panel">
          <div className="wrap two-column">
            <div>
              <p className="eyebrow">HOW TO GET STARTED</p>
              <h2>Tell us what you are trying to accomplish.</h2>
            </div>
            <div>
              <p>
                You do not need to know which software or technical approach is
                right before contacting us. Explain your research, journal or
                organisational need, the people who will use the service and
                the result you want to achieve.
              </p>
              <p>
                We will discuss the suitable service, confirm what is currently
                available, identify any requirements and agree on the scope
                before work begins.
              </p>
            </div>
          </div>
        </section>

        <section>
          <div className="wrap">
            <div className="section-head">
              <div>
                <p className="eyebrow">WHO WE SERVE</p>
                <h2>Support for people and organisations doing research-led work.</h2>
              </div>
            </div>
            <div className="feature-grid">
              <article><h3>Researchers &amp; postgraduate students</h3><p>Online questionnaires, research workflow tools, manuscript screening and data organisation.</p></article>
              <article><h3>Academic journals &amp; publishers</h3><p>OJS platforms, journal infrastructure, editorial workflows, DOI processes and scholarly metadata.</p></article>
              <article><h3>Universities &amp; research centres</h3><p>Research systems, digital data workflows, journal technology and tailored software.</p></article>
              <article><h3>Research consultants &amp; NGOs</h3><p>Instrument hosting, evidence collection, data preparation and project-specific digital tools.</p></article>
              <article><h3>Businesses &amp; organisations</h3><p>Custom applications, workflow automation and structured data systems for operational needs.</p></article>
              <article><h3>International authors &amp; clients</h3><p>Administrative coordination for publishing-related requirements and eligible international supplier arrangements.</p></article>
            </div>
          </div>
        </section>

        <section>
          <div className="wrap cta-band">
            <div>
              <p className="eyebrow">LET'S DISCUSS YOUR PROJECT</p>
              <h2>Have a questionnaire to host, a journal to develop or a workflow to improve?</h2>
              <p>Describe what you need and we will help you identify a practical next step.</p>
            </div>
            <a className="btn-primary" href="/contact">Contact Onyitech JournalHub</a>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
