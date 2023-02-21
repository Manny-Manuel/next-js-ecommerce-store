/* This is an example Query Schema to design out Database and then push to Postresql  */


--CREATING TABLE

CREATE TABLE  collection(
  id integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  brand_name varchar(30) NOT NULL,
  type varchar(30) NOT NULL,
  color varchar(30) NOT NULL,
  description TEXT,
  price varchar (60)
);

--INSERTIN COLLECTION
INSERT INTO collection
(brand_name, type, color,   description, price )
VALUES
('Apple-black', 'Headphone', 'Black',  '𝘓𝘰𝘳𝘦𝘮 𝘪𝘱𝘴𝘶𝘮 𝘥𝘰𝘭𝘰𝘳 𝘴𝘪𝘵 𝘢𝘮𝘦𝘵,𝘓𝘰𝘳𝘦𝘮 𝘪𝘱𝘴𝘶𝘮 𝘥𝘰𝘭𝘰𝘳 𝘴𝘪𝘵 𝘢𝘮𝘦𝘵', '339.99$'),

('Apple-Green', 'Headphone', 'Green',  '𝘓𝘰𝘳𝘦𝘮 𝘪𝘱𝘴𝘶𝘮 𝘥𝘰𝘭𝘰𝘳 𝘴𝘪𝘵 𝘢𝘮𝘦𝘵,𝘓𝘰𝘳𝘦𝘮 𝘪𝘱𝘴𝘶𝘮 𝘥𝘰𝘭𝘰𝘳 𝘴𝘪𝘵 𝘢𝘮𝘦𝘵', '339.99$'),

('Apple-Pink-Red', 'Headphone', 'Red',  '𝘓𝘰𝘳𝘦𝘮 𝘪𝘱𝘴𝘶𝘮 𝘥𝘰𝘭𝘰𝘳 𝘴𝘪𝘵 𝘢𝘮𝘦𝘵,𝘓𝘰𝘳𝘦𝘮 𝘪𝘱𝘴𝘶𝘮 𝘥𝘰𝘭𝘰𝘳 𝘴𝘪𝘵 𝘢𝘮𝘦𝘵', '349.99$'),

('Cat-Headset', 'Headphone', 'Silver', '𝘓𝘰𝘳𝘦𝘮 𝘪𝘱𝘴𝘶𝘮 𝘥𝘰𝘭𝘰𝘳 𝘴𝘪𝘵 𝘢𝘮𝘦𝘵,𝘓𝘰𝘳𝘦𝘮 𝘪𝘱𝘴𝘶𝘮 𝘥𝘰𝘭𝘰𝘳 𝘴𝘪𝘵 𝘢𝘮𝘦𝘵', '149.99$' ),

('Cat-Headset', 'Headphone', 'Pink',  '𝘓𝘰𝘳𝘦𝘮 𝘪𝘱𝘴𝘶𝘮 𝘥𝘰𝘭𝘰𝘳 𝘴𝘪𝘵 𝘢𝘮𝘦𝘵,𝘓𝘰𝘳𝘦𝘮 𝘪𝘱𝘴𝘶𝘮 𝘥𝘰𝘭𝘰𝘳 𝘴𝘪𝘵 𝘢𝘮𝘦𝘵', '149.99$'),

('cat-Headset', 'Headphone', 'White',  '𝘓𝘰𝘳𝘦𝘮 𝘪𝘱𝘴𝘶𝘮 𝘥𝘰𝘭𝘰𝘳 𝘴𝘪𝘵 𝘢𝘮𝘦𝘵,𝘓𝘰𝘳𝘦𝘮 𝘪𝘱𝘴𝘶𝘮 𝘥𝘰𝘭𝘰𝘳 𝘴𝘪𝘵 𝘢𝘮𝘦𝘵', '159.99$'),

('P9-Bluetooth', 'Headphone', 'White-Green',  '𝘓𝘰𝘳𝘦𝘮 𝘪𝘱𝘴𝘶𝘮 𝘥𝘰𝘭𝘰𝘳 𝘴𝘪𝘵 𝘢𝘮𝘦𝘵,𝘓𝘰𝘳𝘦𝘮 𝘪𝘱𝘴𝘶𝘮 𝘥𝘰𝘭𝘰𝘳 𝘴𝘪𝘵 𝘢𝘮𝘦𝘵', '349.99$'),

('P9-Bluetooth', 'Headphone', 'Pink-Red',  '𝘓𝘰𝘳𝘦𝘮 𝘪𝘱𝘴𝘶𝘮 𝘥𝘰𝘭𝘰𝘳 𝘴𝘪𝘵 𝘢𝘮𝘦𝘵,𝘓𝘰𝘳𝘦𝘮 𝘪𝘱𝘴𝘶𝘮 𝘥𝘰𝘭𝘰𝘳 𝘴𝘪𝘵 𝘢𝘮𝘦𝘵', '245.99$'),

('P9-Bluetooth', 'Headphone', 'Pure-White',  '𝘓𝘰𝘳𝘦𝘮 𝘪𝘱𝘴𝘶𝘮 𝘥𝘰𝘭𝘰𝘳 𝘴𝘪𝘵 𝘢𝘮𝘦𝘵,𝘓𝘰𝘳𝘦𝘮 𝘪𝘱𝘴𝘶𝘮 𝘥𝘰𝘭𝘰𝘳 𝘴𝘪𝘵 𝘢𝘮𝘦𝘵', '239.99$'),

('P9-Bluetooth', 'Headphone', 'Pure-Black',  '𝘓𝘰𝘳𝘦𝘮 𝘪𝘱𝘴𝘶𝘮 𝘥𝘰𝘭𝘰𝘳 𝘴𝘪𝘵 𝘢𝘮𝘦𝘵,𝘓𝘰𝘳𝘦𝘮 𝘪𝘱𝘴𝘶𝘮 𝘥𝘰𝘭𝘰𝘳 𝘴𝘪𝘵 𝘢𝘮𝘦𝘵', '245.99$'),

('Montblanc-Black', 'Headphone', 'Black',  '𝘓𝘰𝘳𝘦𝘮 𝘪𝘱𝘴𝘶𝘮 𝘥𝘰𝘭𝘰𝘳 𝘴𝘪𝘵 𝘢𝘮𝘦𝘵,𝘓𝘰𝘳𝘦𝘮 𝘪𝘱𝘴𝘶𝘮 𝘥𝘰𝘭𝘰𝘳 𝘴𝘪𝘵 𝘢𝘮𝘦𝘵', '489.16$'),

('Montblanc-White', 'Headphone', 'White',  '𝘓𝘰𝘳𝘦𝘮 𝘪𝘱𝘴𝘶𝘮 𝘥𝘰𝘭𝘰𝘳 𝘴𝘪𝘵 𝘢𝘮𝘦𝘵,𝘓𝘰𝘳𝘦𝘮 𝘪𝘱𝘴𝘶𝘮 𝘥𝘰𝘭𝘰𝘳 𝘴𝘪𝘵 𝘢𝘮𝘦𝘵', '479.16$');



--GET ALL OUR COLLECTION
-- here we have to try to trigger a connection through next.js
-- in our database folder we need to creact a file to connect
SELECT * FROM collection;
