import { Section } from '@ui';

export default function Page() {
  return (
    <div className="flex w-full flex-col items-center justify-between bg-white px-4 py-8 font-sans">
      <div className="max-w-3xl space-y-8">
        <Section title="why do we do this?" className="w-full">
          sometimes, we come up with a really, really stupid idea. and sometimes that idea comes up again enough times
          that we want to make it into a real thing to stick on our possessions. there's almost always overstock after
          we've taken our personal copies and sold a few more to close friends foolish enough to buy in. this is where
          the rest ends up.
        </Section>
        <Section title="why don't we use a make-to-order service?" className="w-full">
          redbubble and most other make-to-order services use lower quality materials and printing, since they focus on
          making affordable mass-market products. we prefer to support independent shops who use great printers and
          outdoor UV-rated vinyl, so our shitposts are forever. unfortunately, these shops typically have an MOQ
          (minimum order quantity) since it's impractical for them to do all the setup work for a very low volume of
          product.
        </Section>
        <Section title="when do we restock items?" className="w-full">
          we don't. everything on here gets made once, and then it's gone. we aren't interested in turning a profit off
          any ideas that happen to strike a chord with people. you can request a restock on our contact page if you
          really want to. we make no guarantees, and the answer is probably no unless you can prove you have fifty or
          more additional people willing to spend on it.
        </Section>
        <Section title="how do we make money off this?" className="w-full">
          we don't.
        </Section>
      </div>
    </div>
  );
}
