# After Effects Expressions

Repository for Adobe After Effects expressions I wrote.

## CompMarkerTimeRemap

Time remaps a composition using comp marker positions. Useful for when you would like to:

- Adjust timing of a comp from the parent comp
- Use the same comp throughout a project but with different timing

<dl>
  <dt>Usage</dt>
  <dd>
    <ol>
      <li>In the target comp, add a ranged comp marker (not a layer marker) for every set of keyframes for which you'd like to adjust the timing.</li>
      <li>In the parent comp, right click on the corresponding comp layer and select <strong>Time > Enable Time Remapping</strong>.</li>
      <li>Paste this expression on the <strong>Time Remap</strong> property of the layer.
      <li>Create a new marker on this layer. Right click the marker, then select <strong>Update Markers From Source</strong>.</li>
      <li>Adjust layer markers to desired timing.</li>
    </ol>
  </dd>
  <dt>Requirements</dt>
  <dd>
   <ul>
     <li>Only range markers are used to adjust timing. Markers without duration are ignored.</li>
     <li>All range markers must have comments.</li>
   </ul>
  </dd>
  <dt>Limitations</dt>
  <dd>
  Artifacts appear with Motion Blur enabled in the target comp.
  </dd>
</dl>