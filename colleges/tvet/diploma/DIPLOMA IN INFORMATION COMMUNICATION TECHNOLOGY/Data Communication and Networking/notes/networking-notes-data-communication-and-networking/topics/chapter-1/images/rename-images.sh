#!/bin/bash

# Create a backup directory
mkdir -p backup
cp fig-*.png backup/

# Data Communications and Components (Chapter 1)
mv fig-008.png fig-1-1-data-communication-model.png
mv fig-011.png fig-1-2-data-flow-simplex.png
mv fig-014.png fig-1-3-data-flow-half-duplex.png
mv fig-015.png fig-1-4-data-flow-full-duplex.png
mv fig-018.png fig-1-5-point-to-point.png
mv fig-019.png fig-1-6-multipoint.png
mv fig-022.png fig-1-7-mesh-topology.png
mv fig-023.png fig-1-8-star-topology.png
mv fig-028.png fig-1-9-bus-topology.png
mv fig-029.png fig-1-10-ring-topology.png

# Signal Characteristics and Transmission
mv fig-032.png fig-1-11-periodic-signal.png
mv fig-033.png fig-1-12-composite-signal.png
mv fig-034.png fig-1-13-digital-signal.png
mv fig-037.png fig-1-14-peak-amplitude.png
mv fig-038.png fig-1-15-period-frequency.png

# Add more mappings as needed...

echo "Images have been renamed according to their chapter and content."