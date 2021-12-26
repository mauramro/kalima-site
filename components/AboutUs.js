

const AboutUs = () => {
  return (
    <><h3 className="text-center text-white text-4xl py-5">Acerca de nosotros</h3>
    <div className="grid sm:grid-cols-1 sm:gap-1 lg:grid-cols-2 lg:gap-2">
          <div>
              <img
                  src="/images/person-outdoor-night-park.jpg"
                  alt="Banner image"
                  className="mx-auto" />

          </div>
          <div className="text-white text-justify">
              <h3 className="p-3">20,000 leagues under the sea</h3>

              <p className="p-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean in suscipit eros. 
              Vestibulum consequat eget nisi nec eleifend. Nullam at leo vel eros dapibus congue sed non risus. 
              Duis bibendum enim nec risus elementum, in imperdiet arcu ultrices. Phasellus ut odio sit amet turpis 
              pharetra efficitur. Ut vestibulum tempor tristique. Donec blandit ligula porttitor nibh ullamcorper auctor. 
              Fusce vel ligula lorem. Nam vehicula, erat et facilisis tempus, neque arcu posuere est, at cursus urna .</p>

              <p className="p-3">Donec id risus non turpis condimentum bibendum. Nullam elementum scelerisque massa ac vestibulum. Fusce sed odio vitae velit interdum rhoncus quis a ipsum. In varius quam quis velit mattis viverra. Donec vehicula, metus ac scelerisque viverra, mi tellus blandit lorem, non volutpat diam metus eget nisi. Cras tincidunt auctor mi. Aenean at eros vel odio volutpat efficitur. Nunc molestie nisl id mi mollis accumsan. Maecenas facilisis vel justo et hendrerit.</p>

              <p className="p-3">Praesent sit amet justo augue. Donec porttitor suscipit justo id vulputate. Etiam vel neque lobortis lacus porta imperdiet. In hac habitasse platea dictumst. Integer ut dui quis ligula consectetur eleifend. Donec venenatis lectus vel fringilla viverra.</p>
          </div>
      </div></>
  );
};

export default AboutUs;