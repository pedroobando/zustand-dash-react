import { FormEvent } from 'react';
import { WhiteCard } from '../../components';
import { useWenddingBoundStore } from '../../stores';

export const WeddingInvitationPage = () => {
  const firstName = useWenddingBoundStore((state) => state.firstName);
  const lastName = useWenddingBoundStore((state) => state.LastName);

  const setFirstName = useWenddingBoundStore((state) => state.setFirstName);
  const setLastName = useWenddingBoundStore((state) => state.setLastName);

  const guestCount = useWenddingBoundStore((state) => state.guestCount);
  const setGuestCount = useWenddingBoundStore((state) => state.setGuestCount);

  const eventYYMMDD = useWenddingBoundStore((state) => state.eventYYMMDD());
  const eventTime = useWenddingBoundStore((state) => state.eventHHMM());

  const eventDate = useWenddingBoundStore((state) => state.eventDate);
  const setEventDate = useWenddingBoundStore((state) => state.setEventDate);
  const setEventTime = useWenddingBoundStore((state) => state.setEventTime);

  const isConfirmed = useWenddingBoundStore((state) => state.isConfirmed);
  const setIsConfirmed = useWenddingBoundStore((state) => state.setIsConfirmed);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    console.log({ firstName, lastName, guestCount, eventDate, isConfirmed });
  };

  return (
    <>
      <h1>Invitación de Boda</h1>
      <p>Zustand segmentado en slices</p>
      <hr />

      <WhiteCard className="flex items-center justify-center p-12">
        <div className="mx-auto w-full max-w-[550px]">
          <form onSubmit={onSubmit}>
            <div className="-mx-3 flex flex-wrap">
              <div className="w-full px-3 sm:w-1/2">
                <div className="mb-5">
                  <label className="mb-3 block text-base font-medium text-[#07074D]">
                    Primer Nombre
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    id="firstName"
                    placeholder="Primer Nombre"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </div>
              </div>
              <div className="w-full px-3 sm:w-1/2">
                <div className="mb-5">
                  <label className="mb-3 block text-base font-medium text-[#07074D]">
                    Apellido
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    id="lastName"
                    placeholder="Apellido"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </div>
              </div>
            </div>

            <div className="-mx-3 flex flex-wrap">
              <div className="w-full px-3 sm:w-1/2">
                <div className="mb-5">
                  <label className="mb-3 block text-base font-medium text-[#07074D]">
                    Fecha de evento
                  </label>
                  <input
                    type="date"
                    name="eventDate"
                    id="eventDate"
                    value={eventYYMMDD}
                    onChange={(e) => setEventDate(e.target.value)}
                  />
                </div>
              </div>
              <div className="w-full px-3 sm:w-1/2">
                <div className="mb-5">
                  <label className="mb-3 block text-base font-medium text-[#07074D]">
                    Hora del evento
                  </label>
                  <input
                    type="time"
                    name="eventTime"
                    id="eventTime"
                    value={eventTime}
                    onChange={(e) => setEventTime(e.target.value)}
                  />
                </div>
              </div>
            </div>

            <div className="mb-5">
              <label className="mb-3 block text-base font-medium text-[#07074D]">
                ¿Cuántos invitados traerá?
              </label>
              <input
                type="number"
                name="guestNumber"
                id="guestNumber"
                placeholder="5"
                min="0"
                value={guestCount}
                onChange={(e) => setGuestCount(+e.target.value)}
                className="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>

            <div className="mb-5">
              <label className="mb-3 block text-base font-medium text-[#07074D]">
                ¿Tu también vendrás?
              </label>
              <div className="flex items-center space-x-6">
                <div className="flex items-center">
                  <input
                    type="radio"
                    name="isComing"
                    id="radioButton1"
                    className="h-5 w-5"
                    checked={isConfirmed}
                    onChange={() => !isConfirmed && setIsConfirmed(true)}
                  />
                  <label className="pl-3 text-base font-medium text-[#07074D]">Si</label>
                </div>
                <div className="flex items-center">
                  <input
                    type="radio"
                    name="isComing"
                    id="radioButton2"
                    className="h-5 w-5"
                    checked={!isConfirmed}
                    onChange={() => isConfirmed && setIsConfirmed(false)}
                  />

                  <label className="pl-3 text-base font-medium text-[#07074D]">No</label>
                </div>
              </div>
            </div>

            <div>
              <button>Enviar</button>
            </div>
          </form>
        </div>
      </WhiteCard>
    </>
  );
};
