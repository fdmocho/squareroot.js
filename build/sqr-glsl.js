SQR.GLSL = {
	/* --- --- [light/sphar-cathedral.glsl] --- --- */
	"light/sphar-cathedral.glsl": "const vec3 L00  = vec3( 0.78908,  0.43710,  0.54161);\nconst vec3 L1m1 = vec3( 0.39499,  0.34989,  0.60488);\nconst vec3 L10  = vec3(-0.33974, -0.18236, -0.26940);\nconst vec3 L11  = vec3(-0.29213, -0.05562,  0.00944);\nconst vec3 L2m2 = vec3(-0.11141, -0.05090, -0.12231);\nconst vec3 L2m1 = vec3(-0.26240, -0.22401, -0.47479);\nconst vec3 L20  = vec3(-0.15570, -0.09471, -0.14733);\nconst vec3 L21  = vec3( 0.56014,  0.21444,  0.13915);\nconst vec3 L22  = vec3( 0.21205, -0.05432, -0.30374);\n",
	/* --- --- [light/sphar-eucalyptus.glsl] --- --- */
	"light/sphar-eucalyptus.glsl": "const vec3 L00  = vec3( 0.3783264,  0.4260425,  0.4504587);\nconst vec3 L1m1 = vec3( 0.2887813,  0.3586803,  0.4147053);\nconst vec3 L10  = vec3( 0.0379030,  0.0295216,  0.0098567);\nconst vec3 L11  = vec3(-0.1033028, -0.1031690, -0.0884924);\nconst vec3 L2m2 = vec3(-0.0621750, -0.0554432, -0.0396779);\nconst vec3 L2m1 = vec3( 0.0077820, -0.0148312, -0.0471301);\nconst vec3 L20  = vec3(-0.0935561, -0.1254260, -0.1525629);\nconst vec3 L21  = vec3(-0.0572703, -0.0502192, -0.0363410);\nconst vec3 L22  = vec3( 0.0203348, -0.0044201, -0.0452180);\n",
	/* --- --- [light/sphar-oldtown.glsl] --- --- */
	"light/sphar-oldtown.glsl": "const vec3 L00 = vec3( 0.871297, 0.875222, 0.864470);\nconst vec3 L1m1 = vec3( 0.175058, 0.245335, 0.312891);\nconst vec3 L10 = vec3( 0.034675, 0.036107, 0.037362);\nconst vec3 L11 = vec3(-0.004629, -0.029448, -0.048028);\nconst vec3 L2m2 = vec3(-0.120535, -0.121160, -0.117507);\nconst vec3 L2m1 = vec3( 0.003242, 0.003624, 0.007511);\nconst vec3 L20 = vec3(-0.028667, -0.024926, -0.020998);\nconst vec3 L21 = vec3(-0.077539, -0.086325, -0.091591);\nconst vec3 L22 = vec3(-0.161784, -0.191783, -0.219152);\n",
	/* --- --- [light/sphar-st-peter.glsl] --- --- */
	"light/sphar-st-peter.glsl": "const vec3 L00  = vec3( 0.3623915,  0.2624130,  0.2326261);\nconst vec3 L1m1 = vec3( 0.1759130,  0.1436267,  0.1260569);\nconst vec3 L10  = vec3(-0.0247311, -0.0101253, -0.0010745);\nconst vec3 L11  = vec3( 0.0346500,  0.0223184,  0.0101350);\nconst vec3 L2m2 = vec3( 0.0198140,  0.0144073,  0.0043987);\nconst vec3 L2m1 = vec3(-0.0469596, -0.0254485, -0.0117786);\nconst vec3 L20  = vec3(-0.0898667, -0.0760911, -0.0740964);\nconst vec3 L21  = vec3( 0.0050194,  0.0038841,  0.0001374);\nconst vec3 L22  = vec3(-0.0818750, -0.0321501,  0.0033399);\n",
	/* --- --- [light/sphar-sunset.glsl] --- --- */
	"light/sphar-sunset.glsl": "const vec3 L00  = vec3( 0.7870665,  0.9379944,  0.9799986);\nconst vec3 L1m1 = vec3( 0.4376419,  0.5579443,  0.7024107);\nconst vec3 L10  = vec3(-0.1020717, -0.1824865, -0.2749662);\nconst vec3 L11  = vec3( 0.4543814,  0.3750162,  0.1968642);\nconst vec3 L2m2 = vec3( 0.1841687,  0.1396696,  0.0491580);\nconst vec3 L2m1 = vec3(-0.1417495, -0.2186370, -0.3132702);\nconst vec3 L20  = vec3(-0.3890121, -0.4033574, -0.3639718);\nconst vec3 L21  = vec3( 0.0872238,  0.0744587,  0.0353051);\nconst vec3 L22  = vec3( 0.6662600,  0.6706794,  0.5246173);\n",
	/* --- --- [light/sphar.glsl] --- --- */
	"light/sphar.glsl": "const float C1 = 0.429043;\nconst float C2 = 0.511664;\nconst float C3 = 0.743125;\nconst float C4 = 0.886227;\nconst float C5 = 0.247708;\nvec3 sphericalHarmonics(vec3 n) {\n    vec3 c =  C1 * L22 * (n.x * n.x - n.y * n.y) +\n                    C3 * L20 * n.z * n.z +\n                    C4 * L00 -\n                    C5 * L20 +\n                    2.0 * C1 * L2m2 * n.x * n.y +\n                    2.0 * C1 * L21  * n.x * n.z +\n                    2.0 * C1 * L2m1 * n.y * n.z +\n                    2.0 * C2 * L11  * n.x +\n                    2.0 * C2 * L1m1 * n.y +   \n                    2.0 * C2 * L10  * n.z;\n    return c;\n}\n",
	/* --- --- [math/bezier.glsl] --- --- */
	"math/bezier.glsl": "float bezierPosition(float t, float p0, float c0, float c1, float p1) {\n    return p0 * (1.0 - t) * (1.0 - t) * (1.0 - t) + c0 * 3.0 * t * (1.0 - t) * (1.0 - t) + c1 * 3.0 * t * t * (1.0 - t) + p1 * t * t * t;\n}\nfloat bezierVelocity(float t, float p0, float c0, float c1, float p1) {\n    return (3.0 * c0 - 3.0 * p0) + 2.0 * (3.0 * p0 - 6.0 * c0 + 3.0 * c1) * t + 3.0 * (-p0 + 3.0 * c0 - 3.0 * c1 + p1) * t * t;\n}\nvec3 bezierPosition3d(float t, vec3 p0, vec3 c0, vec3 c1, vec3 p1) {\n    return p0 * (1.0 - t) * (1.0 - t) * (1.0 - t) + c0 * 3.0 * t * (1.0 - t) * (1.0 - t) + c1 * 3.0 * t * t * (1.0 - t) + p1 * t * t * t;\n}\n",
	/* --- --- [post/blur.glsl] --- --- */
	"post/blur.glsl": "//#vertex\nprecision mediump float;\nattribute vec2 aPosition;\nattribute vec2 aUV;\nvarying vec2 vUV;\nvoid main(void) {\n    gl_Position = vec4(aPosition, 0.0, 1.0);\n    vUV = aUV;  \n}\n//#fragment\nprecision mediump float;\n#ifndef ITE\n#define ITE 16.0\n#endif\nuniform sampler2D uTexture;\nuniform vec2 uDelta;\nvarying vec2 vUV;\nfloat random(vec3 scale, float seed) {\n    return fract(sin(dot(gl_FragCoord.xyz + seed, scale)) * 675.5453 + seed);\n}\nvoid main(void) {\n    float offset = random(vec3(24.6546, 13.4905, 210.8789), 2.0);\n    vec4 c = vec4(0.0);\n    float ws = 0.0;\n    float d;\n    vec4 col = texture2D(uTexture, vUV);\n	for(float t = -ITE; t <= ITE; t++) {\n        float p = (t + offset - 0.5) / ITE;\n        float w = 1.0 - abs(p);\n        c += texture2D(uTexture, vUV + uDelta * p) * w;\n        ws += w;\n    }\n	gl_FragColor = vec4(c.rgb / ws, 1.0);\n}\n",
	/* --- --- [post/fxaa.glsl] --- --- */
	"post/fxaa.glsl": "#ifndef FXAA_REDUCE_MIN\n    #define FXAA_REDUCE_MIN   (1.0/ 128.0)\n#endif\n#ifndef FXAA_REDUCE_MUL\n    #define FXAA_REDUCE_MUL   (1.0 / 8.0)\n#endif\n#ifndef FXAA_SPAN_MAX\n    #define FXAA_SPAN_MAX     8.0\n#endif\nvec4 fxaa(sampler2D tex, vec2 fragCoord, vec2 resolution,\n            vec2 v_rgbNW, vec2 v_rgbNE, \n            vec2 v_rgbSW, vec2 v_rgbSE, \n            vec2 v_rgbM) {\n    vec4 color;\n    mediump vec2 inverseVP = vec2(1.0 / resolution.x, 1.0 / resolution.y);\n    vec3 rgbNW = texture2D(tex, v_rgbNW).xyz;\n    vec3 rgbNE = texture2D(tex, v_rgbNE).xyz;\n    vec3 rgbSW = texture2D(tex, v_rgbSW).xyz;\n    vec3 rgbSE = texture2D(tex, v_rgbSE).xyz;\n    vec4 texColor = texture2D(tex, v_rgbM);\n    vec3 rgbM  = texColor.xyz;\n    vec3 luma = vec3(0.299, 0.587, 0.114);\n    float lumaNW = dot(rgbNW, luma);\n    float lumaNE = dot(rgbNE, luma);\n    float lumaSW = dot(rgbSW, luma);\n    float lumaSE = dot(rgbSE, luma);\n    float lumaM  = dot(rgbM,  luma);\n    float lumaMin = min(lumaM, min(min(lumaNW, lumaNE), min(lumaSW, lumaSE)));\n    float lumaMax = max(lumaM, max(max(lumaNW, lumaNE), max(lumaSW, lumaSE)));\n    mediump vec2 dir;\n    dir.x = -((lumaNW + lumaNE) - (lumaSW + lumaSE));\n    dir.y =  ((lumaNW + lumaSW) - (lumaNE + lumaSE));\n    float dirReduce = max((lumaNW + lumaNE + lumaSW + lumaSE) *\n                          (0.25 * FXAA_REDUCE_MUL), FXAA_REDUCE_MIN);\n    float rcpDirMin = 1.0 / (min(abs(dir.x), abs(dir.y)) + dirReduce);\n    dir = min(vec2(FXAA_SPAN_MAX, FXAA_SPAN_MAX),\n              max(vec2(-FXAA_SPAN_MAX, -FXAA_SPAN_MAX),\n              dir * rcpDirMin)) * inverseVP;\n    vec3 rgbA = 0.5 * (\n        texture2D(tex, fragCoord * inverseVP + dir * (1.0 / 3.0 - 0.5)).xyz +\n        texture2D(tex, fragCoord * inverseVP + dir * (2.0 / 3.0 - 0.5)).xyz);\n    vec3 rgbB = rgbA * 0.5 + 0.25 * (\n        texture2D(tex, fragCoord * inverseVP + dir * -0.5).xyz +\n        texture2D(tex, fragCoord * inverseVP + dir * 0.5).xyz);\n    float lumaB = dot(rgbB, luma);\n    if ((lumaB < lumaMin) || (lumaB > lumaMax))\n        color = vec4(rgbA, texColor.a);\n    else\n        color = vec4(rgbB, texColor.a);\n    return color;\n}\n",
	/* --- --- [post/image.glsl] --- --- */
	"post/image.glsl": "//#vertex\nattribute vec2 aPosition;\nattribute vec2 aUV;\nvarying vec2 vUV;\nvoid main() {\n	vUV = aUV;\n	gl_Position = vec4(aPosition, 0.0, 1.0);\n}\n//#fragment\n#ifdef GL_ES\nprecision highp float;\n#endif\nvarying vec2 vUV;\nuniform sampler2D uTexture;\nvoid main() {\n	vec3 image = texture2D(uTexture, vUV).rgb;\n	gl_FragColor = vec4(image, 1.0);\n}\n",
	/* --- --- [shaders/skybox-2d.glsl] --- --- */
	"shaders/skybox-2d.glsl": "//#vertex\nattribute vec3 aPosition;\nattribute vec2 aUV;\nuniform mat4 uMatrix;\nuniform mat4 uViewMatrix;\nuniform mat4 uProjection;\nuniform vec3 uEyePosition;\nvarying vec2 vUV;\nvoid main(void) {\n	vUV = aUV;\n	gl_Position = uProjection * uViewMatrix * vec4(uEyePosition + aPosition, 1.0);\n}\n//#fragment\n#ifdef GL_ES\nprecision highp float;\n#endif\nuniform sampler2D uTexture;\nvarying vec2 vUV;\nvoid main(void) {\n	gl_FragColor = texture2D(uTexture, vUV);\n}\n",
	/* --- --- [shaders/skybox-cube.glsl] --- --- */
	"shaders/skybox-cube.glsl": "//#vertex\nattribute vec3 aPosition;\nuniform mat4 uMatrix;\nuniform mat4 uViewMatrix;\nuniform mat4 uProjection;\nuniform vec3 uEyePosition;\nvarying vec3 vPosition;\nvoid main(void) {\n	gl_Position = uProjection * uViewMatrix * vec4(uEyePosition + aPosition, 1.0);\n	vPosition = aPosition;	\n}\n//#fragment\n#ifdef GL_ES\nprecision highp float;\n#endif\nuniform samplerCube uCubemap;\nvarying vec3 vPosition;\nvoid main(void) {\n	vec3 p = vPosition;\n	p.z *= -1.0;\n	gl_FragColor = textureCube(uCubemap, p);\n}\n",
};
