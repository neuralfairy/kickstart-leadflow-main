import Layout from '@/components/Layout';

const Terms = () => (
  <Layout>
    <article className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <header className="mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
          Terms of Service
        </h1>
        <p className="text-muted-foreground">
          Terms governing the use of Kickitmarketing services.
        </p>
      </header>

      <div className="space-y-8 text-muted-foreground leading-7">
        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">1. Acceptance of Terms</h2>
          <p>
            By using this website or purchasing our services, you agree to these Terms of Service
            and all applicable laws and regulations.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">2. Use of Services</h2>
          <p>
            You agree to use our services lawfully and not to misuse, disrupt, or attempt to gain
            unauthorized access to the website or its systems.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">3. Accounts and Purchases</h2>
          <p>
            Information submitted for an account or purchase must be accurate and complete.
            Applicable fees, billing terms, refunds, and cancellation terms will be provided at
            the time of purchase.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">4. Intellectual Property</h2>
          <p>
            Website content and materials are owned or licensed by Kickitmarketing and may not be
            reproduced or redistributed without permission.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">5. Limitation of Liability</h2>
          <p>
            To the maximum extent permitted by law, Kickitmarketing will not be liable for indirect,
            incidental, or consequential damages arising from use of the website or services.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">6. Contact</h2>
          <p>
            Questions about these terms may be sent to hello@kickitmarketing.com.
          </p>
        </section>
      </div>
    </article>
  </Layout>
);

export default Terms;
