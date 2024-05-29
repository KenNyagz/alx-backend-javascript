export default function guardrail(mathFunction) {
  let queue = [];
  const message = 'Guardrail was processed';

  try {
    let calc = mathFunction();
    queue.push(calc);
  } catch (error) {
    queue.push(error.message);
  } finally {
    queue.push(message);
  }

  return queue;
}
