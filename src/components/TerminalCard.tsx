export default function TerminalCard() {
  return (
    <div className="space-y-3">
      <span className="badge">Terminal</span>
      <h2 className="section-title">skills/</h2>

      <div className="terminal">
        <div className="terminal-header">
          <span className="terminal-dot bg-[#ff5f56]" />
          <span className="terminal-dot bg-[#ffbd2e]" />
          <span className="terminal-dot bg-[#27c93f]" />
        </div>
        <div className="terminal-body">
          <p>
            <span className="text-[var(--accent-lime)]">jack@vuely</span>:~$ ls skills/
          </p>
          <p>nextjs react typescript python-ml</p>
          <p>erp-systems ai-agents product-design</p>
          <p>prompt-eng leadership spanish</p>
        </div>
      </div>
    </div>
  );
}
