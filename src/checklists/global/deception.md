# Deception

**Digital Radio Frequency Memory**

Digital Radio Frequency Memory(DRFM) is the process of receiving, modifying, and retransmitting threat radar pulses to exploit vulnerabilities. It is done by digitizing a received RF signal, then reconstructing and modifying the signal based on desired effects.

**Range Gate Pull Off**

Range Gate Pull Off(RGPO)counters an attacking radar that has acquired a single target track(STT). If successful, RGPO can break the STT. RGPO works by exploiting a threat radar’s range-gate, which is the span of ranges where it expects the target to be. For example, a target in an STT should move no more than 1500ft between pulses; any returns outside this range gate can be ignored. To exploit this range gate, an emitter begins by copying the attacking radar's signal and sending it out immediately at a higher power; creating a loud but false track within the expected range gate. Because the radar is now tracking the generated false target, the jammer can begin adding a delay to its retransmission; essentially “walking” the false radar track's perceived range away from the defending aircraft's actual position. After a significant amount of delay has been added to the false track, the emitter can cease its retransmission. This causes the threat radar to attempt to reacquire a target within a range gate that no longer contains the defending aircraft.

![Range Gate](/images/range-gate.png)

**Signature Augmentation**

Signature augmentation is a form of DRFM where the jamming aircraft/decoy modifies a threat radar signal in order to appear as a faux aircraft. This can be achieved by replicating engine micro-doppler returns, radar cross section, or range profile of the desired aircraft. Signature Augmentation is done by the Signature Augmentation Subsystem (SAS) in the EF-24G.
