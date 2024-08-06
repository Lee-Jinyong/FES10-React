import Counter from '@/components/Counter/Counter';
import CounterClass from '@/components/Counter/Counter.class';

function Playground() {
  return (
    <>
      <Counter count={3} min={2} max={6} />
      <CounterClass />
    </>
  );
}

export default Playground;
