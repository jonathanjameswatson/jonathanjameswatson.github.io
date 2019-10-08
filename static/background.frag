#ifdef GL_ES
  precision mediump float;
#endif

#define NUM 8.
#define PI 3.1415926535
#define SPEED 0.2
#define SMOOTH 0.01
#define SIZE 0.05
#define COLOURA vec3(1)
#define COLOURB vec3(0.878, 0.984, 0.988)

uniform vec2 u_resolution;
uniform float u_time;

void main()
{
    vec2 uv = gl_FragCoord.xy / u_resolution.x;
    float offset = fract(floor(uv.x * NUM) / NUM * PI + SPEED * u_time);
    uv = fract(uv * NUM);
    uv.y += offset;
    uv = fract(uv);

    float m = smoothstep(SIZE, SIZE + SMOOTH, length(uv.xy - 0.5));

    gl_FragColor = vec4(mix(COLOURA, COLOURB, m), 1.0);
}