import { Card } from '@/components/card';

export default function Page() {
  return (
    <div className="flex w-full flex-col items-center justify-between px-4 py-8">
      <div className="max-w-3xl space-y-8">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <Card href="/gallery/1">
            <Card.Header>
              <Card.Title>Card Title</Card.Title>
              <Card.DetailGroup>
                <Card.Detail>Card Detail</Card.Detail>
              </Card.DetailGroup>
            </Card.Header>
            <Card.Body>
              <Card.Description>Card Description</Card.Description>
            </Card.Body>
            <Card.ActionGroup>
              <Card.Action>Card Action</Card.Action>
            </Card.ActionGroup>
          </Card>
        </div>
      </div>
    </div>
  );
}
