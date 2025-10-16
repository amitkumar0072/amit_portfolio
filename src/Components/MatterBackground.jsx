import { useEffect, useRef } from "react"
import Matter from "matter-js"
import MatterAttractors from "matter-attractors"
import MatterWrap from "matter-wrap"

Matter.use(MatterAttractors)
Matter.use(MatterWrap)

const MatterBackground = () => {
  const sceneRef = useRef(null)

  useEffect(() => {
    const { Engine, Render, Runner, World, Bodies, Body, Common, Mouse, MouseConstraint, Events } = Matter

    const engine = Engine.create()
    engine.world.gravity.y = 0
    engine.world.gravity.x = 0
    engine.world.gravity.scale = 0.1

    const render = Render.create({
      element: sceneRef.current,
      engine: engine,
      options: {
        width: window.innerWidth,
        height: window.innerHeight,
        wireframes: false,
        background: "transparent",
      },
    })

    const runner = Runner.create()

    const world = engine.world
    world.gravity.scale = 0

    // Create attractor body
    const attractiveBody = Bodies.circle(
      render.options.width / 2,
      render.options.height / 2,
      Math.max(window.innerWidth / 25, window.innerHeight / 25)*2,
      {
        render: { fillStyle: "#000", strokeStyle: "#000", lineWidth: 0 },
        isStatic: true,
        plugin: {
          attractors: [
            function (bodyA, bodyB) {
              return {
                x: (bodyA.position.x - bodyB.position.x) * 1e-6,
                y: (bodyA.position.y - bodyB.position.y) * 1e-6,
              }
            },
          ],
        },
      }
    )

    World.add(world, attractiveBody)

    // Add random polygons and circles
    for (let i = 0; i < 60; i++) {
      let x = Common.random(0, render.options.width)
      let y = Common.random(0, render.options.height)
      let s = Common.random() > 0.6 ? Common.random(10, 80) : Common.random(4, 60)
      let polygonSides = Common.random(3, 6)

      const polygon = Bodies.polygon(x, y, polygonSides, s, {
        mass: s / 20,
        friction: 0,
        frictionAir: 0.02,
        angle: Math.round(Math.random() * 360),
        render: {
          fillStyle: "#222222",
          strokeStyle: "#000000",
          lineWidth: 2,
        },
      })
      World.add(world, polygon)

      const circle1 = Bodies.circle(x, y, Common.random(2, 8), {
        mass: 0.1,
        friction: 0,
        frictionAir: 0.01,
        render: { fillStyle: "#444", strokeStyle: "#000", lineWidth: 2 },
      })
      World.add(world, circle1)

      const circle2 = Bodies.circle(x, y, Common.random(2, 20), {
        mass: 6,
        friction: 0,
        frictionAir: 0,
        render: { fillStyle: "#222", strokeStyle: "#111", lineWidth: 4 },
      })
      World.add(world, circle2)
    }

    // Mouse interaction
    // Mouse setup with constraint (required to track position)
const mouse = Mouse.create(document.body) // or document.documentElement

const mouseConstraint = MouseConstraint.create(engine, {
  mouse: mouse,
  constraint: {
    stiffness: 0.1,
    render: { visible: false },
  },
})

World.add(world, mouseConstraint)
render.mouse = mouse

   Events.on(engine, "afterUpdate", () => {
  if (!mouse.position.x || !mouse.position.y) return

  Body.setPosition(attractiveBody, {
    x: attractiveBody.position.x + (mouse.position.x - attractiveBody.position.x) * 0.2,
    y: attractiveBody.position.y + (mouse.position.y - attractiveBody.position.y) * 0.2,
  })
})






    Runner.run(runner, engine)
    Render.run(render)

    // Handle resize
    const handleResize = () => {
      render.canvas.width = window.innerWidth
      render.canvas.height = window.innerHeight
    }
    window.addEventListener("resize", handleResize)

    return () => {
      Render.stop(render)
      Runner.stop(runner)
      World.clear(world)
      Engine.clear(engine)
      render.canvas.remove()
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return <div ref={sceneRef} className="fixed inset-0 -z-10" />
}

export default MatterBackground
