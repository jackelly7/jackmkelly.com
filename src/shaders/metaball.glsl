float metaballField(vec3 p, vec3 center, float radius) {
  float dist = length(p - center);
  return (radius * radius) / (dist * dist + 0.0001);
}
