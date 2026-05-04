// Simple beep using Web Audio API (no asset needed)
export function playAdzanBeep() {
  try {
    const ctx = new (window.AudioContext || (window as any).webkitAudioContext)();
    const notes = [523.25, 659.25, 783.99, 1046.5];
    notes.forEach((freq, i) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = "sine";
      osc.frequency.value = freq;
      gain.gain.setValueAtTime(0, ctx.currentTime + i * 0.45);
      gain.gain.linearRampToValueAtTime(0.18, ctx.currentTime + i * 0.45 + 0.05);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + i * 0.45 + 0.4);
      osc.connect(gain).connect(ctx.destination);
      osc.start(ctx.currentTime + i * 0.45);
      osc.stop(ctx.currentTime + i * 0.45 + 0.42);
    });
  } catch (e) {
    console.warn("Audio not available", e);
  }
}
