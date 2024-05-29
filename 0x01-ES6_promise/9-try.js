export default function guardrail(mathFunction) {
  let queue = [];
  const message = 'Guardrail was processed';

  try {
    let calc = mathFunction();
    queue.push(calc);
  } catch (error) {
    queue.push(`Error: ${error.message}`);
  } finally {
    queue.push(message);
  }

  return queue;
}
