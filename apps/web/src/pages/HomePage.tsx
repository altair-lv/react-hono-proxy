import { useHealthQuery } from '../state/health';

const HomePage = () => {
  const { data, isLoading } = useHealthQuery();
  return (
    <div className="container mx-auto max-w-3xl px-4 py-2">
      <pre className="overflow-x-auto font-mono text-sm">Server Status</pre>
      <div className="grid gap-6">
        <section className="rounded-lg border p-4">
          <h2 className="mb-2 font-medium">API Status</h2>
          <div className="flex items-center gap-2">
            <div className={`h-2 w-2 rounded-full ${data ? 'bg-green-500' : 'bg-red-500'}`} />
            <span className="text-sm text-muted-foreground">{isLoading ? 'Checking...' : data ? 'Connected' : 'Disconnected'}</span>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HomePage;
